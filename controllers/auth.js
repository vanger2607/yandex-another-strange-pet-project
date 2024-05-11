const users = require("../models/user.js");
const jwt = require("jsonwebtoken");
const crypt = require("crypto");
const login = (req, res) => {
    const { email, password } = req.body;

    users
        .findUserByCredentials(email, password)
        .then((user) => {
            const secretKey = crypt.randomBytes(256).toString("base64");
            const token = jwt.sign({ _id: user._id }, secretKey, {
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
module.exports = login;
