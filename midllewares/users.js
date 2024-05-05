// Импортируем модель
const users = require("../models/user");
const logger = require("../logger")

const findAllUsers = async (req, res, next) => {
    logger.info("GET /users")
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

const findUserById = async (req, res, next) => {
    logger.info("GET /users/:id");
    try {
        req.user = await users.findById(req.params.id);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send(JSON.stringify({ message: "Пользователь не найден" }));
    }
};
const updateUser = async (req, res, next) => {
    logger.info("PUT /users/:id")
    try {
        // В метод передаём id из параметров запроса и объект с новыми свойствами
        req.user = await users.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка обновления игры" }));
    }
};



// Экспортируем функцию поиска всех пользователей
module.exports = { findAllUsers, createUser, findUserById, updateUser };
