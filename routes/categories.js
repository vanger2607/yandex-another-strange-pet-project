 // Создаём роут для запросов категорий 
 const categoriesRouter = require('express').Router();
 // Импортируем вспомогательные функции

    const {findAllCategories, createCategory} = require('../midllewares');
    
    const {sendAllCategories, sendCategoryCreated} = require('../controllers');
    
    // Обрабатываем GET-запрос с роутом '/categories'
    categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
    categoriesRouter.post(
        "/categories", 
        findAllCategories, 
        createCategory, 
        sendCategoryCreated
    ); 

 
 // Экспортируем роут для использования в приложении — app.js
 module.exports = categoriesRouter;
