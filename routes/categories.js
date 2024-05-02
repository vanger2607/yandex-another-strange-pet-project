 // Создаём роут для запросов категорий 
 const categoriesRouter = require('express').Router();
 // Импортируем вспомогательные функции

    const findAllCategories = require('../midllewares').findAllCategories;
    
    const sendAllCategories = require('../controllers').sendAllCategories;
    
    // Обрабатываем GET-запрос с роутом '/categories'
    categoriesRouter.get('/categories', findAllCategories, sendAllCategories);


 
 // Экспортируем роут для использования в приложении — app.js
 module.exports = categoriesRouter;
