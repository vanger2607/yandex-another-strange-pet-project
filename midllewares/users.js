const users = require("../models/user");
const bcrypt = require("bcryptjs");
const logger = require("../logger");

const findAllUsers = async (req, res, next) => {
    logger.info("GET /api/users");
    req.usersArray = await users.find({}, { password: 0 });
    next();
};

const hashPassword = async (req, res, next) => {
    try {
        // Создаём случайную строку длиной в десять символов
        const salt = await bcrypt.genSalt(10);
        // Хешируем пароль
        const hash = await bcrypt.hash(req.body.password, salt);
        // Полученный в запросе пароль подменяем на хеш
        req.body.password = hash;
        next();
    } catch (error) {
        logger.info(`не захешировали нифига, а упали с ошибкой ${error}`);
        res.status(400).send({ message: "Ошибка хеширования пароля" });
    }
};

const createUser = async (req, res, next) => {
    logger.info("POST /users");
    try {
        logger.info(req.body);
        req.user = await users.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        logger.info(`Пользователь не создался, ошибка: ${error}`);
        res
            .status(400)
            .send(JSON.stringify({ message: "Ошибка создания пользователя" }));
    }
};

const findUserById = async (req, res, next) => {
    logger.info("GET /users/:id");
    try {
        req.user = await users.findById(req.params.id, { password: 0 });
        next();
    } catch (error) {
        res.status(404).send("User not found");
    }
};
const updateUser = async (req, res, next) => {
    logger.info("PUT /users/:id");
    try {
        // В метод передаём id из параметров запроса и объект с новыми свойствами
        req.user = await users.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res
            .status(400)
            .send(JSON.stringify({ message: "Ошибка обновления пользователя" }));
    }
};

const deleteUser = async (req, res, next) => {
    logger.info("DELETE /users/:id");
    try {
        // Методом findByIdAndDelete по id находим и удаляем документ из базы данных
        req.user = await users.findByIdAndDelete(req.params.id);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка удаления игры" }));
    }
};

// Экспортируем функцию поиска всех пользователей
module.exports = {
    findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
    hashPassword,
};
