const games = require("../models/game");
const logger = require("../logger");
const findAllGames = async (req, res, next) => {
    // Поиск всех игр в проекте по заданной категории
    logger.info("GET /games");
    if (req.query["categories.name"]) {
        req.gamesArray = await games.findGameByCategory(
            req.query["categories.name"]
        );
        next();
        return;
    }
    // Поиск всех игр в проекте
    req.gamesArray = await games.find({}).populate("categories").populate({
        path: "users",
        select: "-password", // Исключим данные о паролях пользователей
    });
    next();
};

const createGame = async (req, res, next) => {
    logger.info("POST /games");
    try {
        req.game = await games.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
    }
};

const findGameById = async (req, res, next) => {
    logger.info("GET /games/:id");
    try {
        // Пробуем найти игру по id
        req.game = await games
            .findById(req.params.id) // Поиск записи по id
            .populate("categories") // Загрузка связанных записей о категориях
            .populate("users"); // Загрузка связанных записей о пользователях
        next(); // Передаём управление в следующую функцию
    } catch (error) {
        // На случай ошибки вернём статус-код 404 с сообщением, что игра не найдена
        res.setHeader("Content-Type", "application/json");
        res.status(404).send(JSON.stringify({ message: "Игра не найдена" }));
    }
};

const updateGame = async (req, res, next) => {
    logger.info("PUT /games/:id");
    try {
        // В метод передаём id из параметров запроса и объект с новыми свойствами
        req.game = await games.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка обновления игры" }));
    }
};

const deleteGame = async (req, res, next) => {
    logger.info("DELETE /games/:id");
    try {
        // Методом findByIdAndDelete по id находим и удаляем документ из базы данных
        req.game = await games.findByIdAndDelete(req.params.id);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка удаления игры" }));
    }
};

// Экспортируем функцию поиска всех игр
module.exports = {
    findAllGames,
    createGame,
    findGameById,
    updateGame,
    deleteGame,
};
