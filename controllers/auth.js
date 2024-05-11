const users = require("../models/user.js");

const jwt = require("jsonwebtoken");
const path = require("path");

const CONFIG = require("../config");
const SECRET_KEY = CONFIG.SECRET_KEY;
const login = (req, res) => {
    const { email, password } = req.body;
    users
        .findUserByCredentials(email, password)
        .then((user) => {
            /* use this command to create secretKey:
                          node -e "console.log(require('crypto').randomBytes(256).toString('base64'));" */
            const token = jwt.sign({ _id: user._id }, SECRET_KEY, {
                expiresIn: 3600,
            });
            return { user, token };
        })
        .then(({ user, token }) => {
            res.status(200).send({
                _id: user._id,
                username: user.username,
                email: user.email,
                jwt: token,
            });
        })
        .catch((error) => {
            res.status(401).send({ message: error.message });
        });
};

const sendIndex = (req, res) => {
    if (req.cookies.jwt) {
        try {
            jwt.verify(req.cookies.jwt, SECRET_KEY);
            return res.sendFile(
                path.join(__dirname, "../public/admin/dashboard.html")
            );
        } catch (err) {
            return res.sendFile(path.join(__dirname, "../public/index.html"));
        }
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
};

module.exports = {
    login,
    sendIndex,
};
