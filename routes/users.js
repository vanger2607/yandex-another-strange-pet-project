 // Создаём роут для запросов категорий 
 const usersRouter = require('express').Router();
  
 // Импортируем вспомогательные функции
 const findAllUsers = require('../middlewares/');
 const sendAllUsers = require('../controllers/');
 
 // Обрабатываем GET-запрос с роутом '/categories'
 usersRouter.get('/users', findAllUsers, sendAllUsers);
 
 // Экспортируем роут для использования в приложении — app.js
 module.exports = usersRouter;
