// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();
// Импортируем вспомогательные функции

const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory } = require('../midllewares');


const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories',
    findAllCategories,
    sendAllCategories);
categoriesRouter.get("/categories/:id",
    findCategoryById,
    sendCategoryById);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    createCategory,
    sendCategoryCreated
);
categoriesRouter.put(
    "/categories/:id", // Слушаем запросы по эндпоинту
    updateCategory, // Обновляем запись в MongoDB
    sendCategoryUpdated // Возвращаем ответ на клиент
);
categoriesRouter.delete("/categories/:id",
    deleteCategory,
    sendCategoryDeleted);
// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
