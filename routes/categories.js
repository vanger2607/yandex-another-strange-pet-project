// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();
// Импортируем вспомогательные функции

const { findAllCategories, createCategory, findCategoryById } = require('../midllewares');

const { sendAllCategories, sendCategoryCreate, sendCategoryById } = require('../controllers');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    createCategory,
    sendCategoryCreate
);


// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
