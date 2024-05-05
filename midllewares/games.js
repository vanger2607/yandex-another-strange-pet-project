const games = require("../models/game");
const logger = require("../logger")
const findAllGames = async (req, res, next) => {
    // По GET-запросу на эндпоинт /games найдём все документы категорий
    req.gamesArray = await games.find({}).populate("categories").populate("users");;
    logger.info(req.gamesArray);
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
        req.game = await games.findById(req.params.id);
    next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send(JSON.stringify({ message: "Игра не найдена" }));
    }
}; 

// Экспортируем функцию поиска всех игр
module.exports = { findAllGames, createGame, findGameById }; 
