// Импортируем модель
const users = require("../models/user");
const logger = require("@/logger")

const findAllUsers = async (req, res, next) => {
    // По GET-запросу на эндпоинт /users найдём все документы пользователей
    req.usersArray = await users.find({});
    next();
};

const createUser = async (req, res, next) => {
    logger.info("POST /users");
    try {
        logger.info(req.body);
        req.user = await users.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
    }
};

// Экспортируем функцию поиска всех пользователей
module.exports = { findAllUsers, createUser };
