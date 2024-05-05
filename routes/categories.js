// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();
// Импортируем вспомогательные функции

const { findAllCategories, createCategory, findCategoryById, updateCategory } = require('../midllewares');

const { sendAllCategories, sendCategoryCreate, sendCategoryById, sendCategoryUpdated } = require('../controllers');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    createCategory,
    sendCategoryCreate
);
categoriesRouter.put(
    "/categories/:id", // Слушаем запросы по эндпоинту
    updateCategory, // Обновляем запись в MongoDB
    sendCategoryUpdated // Возвращаем ответ на клиент
  ); 

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
