const users = require("../models/user.js");

const jwt = require("jsonwebtoken");
const path = require("path");

const logger = require("../logger");
const CONFIG = require("../config");
const SECRET_KEY = CONFIG.SECRET_KEY;
const login = (req, res) => {
    logger.info("loging")
    const { email, password } = req.body;
    users
        .findUserByCredentials(email, password)
        .then((user) => {
            
            const token = jwt.sign({ _id: user._id }, SECRET_KEY, {
                expiresIn: 3600,
            });
            logger.info(`token: ${token}`)
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
            jwt.verify(req.cookies.jwt, CONFIG.SECRET_KEY);
            return res.redirect("/admin/dashboard");
        } catch (err) {
            return res.sendFile(path.join(__dirname, "../public/index.html"));
        }
    }
    return res.sendFile(path.join(__dirname, "../public/index.html"));
};


const sendDashboard = (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/admin/dashboard.html"));
};

module.exports = {
    login,
    sendIndex,
    sendDashboard,
};
