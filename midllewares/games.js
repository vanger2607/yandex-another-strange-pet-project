const games = require("../models/game");
const logger = require("../logger")
const findAllGames = async (req, res, next) => {
    logger.info("GET /games");
    req.gamesArray = await games
        .find({})
        .populate("categories")
        .populate({
            path: "users",
            select: "-password"
        });
    next();
};
const createGame = async (req, res, next) => {
    logger.info("POST /games");
    try {
        logger.info(req.body);
        req.game = await games.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
    }
};

const findGameById = async (req, res, next) => {
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

// Экспортируем функцию поиска всех игр
module.exports = { findAllGames, createGame, findGameById }; 
