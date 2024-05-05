// Импортируем модель
const categories = require("../models/category");
const logger = require("../logger")

const findAllCategories = async (req, res, next) => {
    // По GET-запросу на эндпоинт /categories найдём все документы категорий
    req.categoriesArray = await categories.find({});
    next();
};
const createCategory = async (req, res, next) => {
    logger.info("POST /categories");
    try {
        logger.info(req.body);
        req.category = await categories.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
    }
};
// Экспортируем функцию поиска всех категорий
module.exports = { findAllCategories, createCategory };
