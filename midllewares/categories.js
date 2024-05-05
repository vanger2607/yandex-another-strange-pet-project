// Импортируем модель
const categories = require("../models/category");
const logger = require("../logger")

const findAllCategories = async (req, res, next) => {
    logger.info("GET /categories")
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

const findCategoryById = async (req, res, next) => {
    logger.info("GET /categories/:id");
    try {
        req.category = await categories.findById(req.params.id);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send(JSON.stringify({ message: "Категория не найдена" }));
    }
};

const updateCategory = async (req, res, next) => {
    logger.info("PUT /categories/id")
    try {
        // В метод передаём id из параметров запроса и объект с новыми свойствами
        req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка обновления игры" }));
    }
};

const deleteCategory = async (req, res, next) => {
    logger.info("DELETE /categories/:id")
    try {
        // Методом findByIdAndDelete по id находим и удаляем документ из базы данных
        req.category = await categories.findByIdAndDelete(req.params.id);
        next();
    } catch (error) {

      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Ошибка обновления категории" }));
    }
};

// Экспортируем функцию поиска всех категорий
module.exports = { findAllCategories, findCategoryById, createCategory, updateCategory, deleteCategory };
