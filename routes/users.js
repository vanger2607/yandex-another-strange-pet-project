 // Создаём роут для запросов категорий 
 const usersRouter = require('express').Router();
  
 // Импортируем вспомогательные функции
 const findAllUsers = require('../midllewares').findAllUsers;
 console.log(findAllUsers)
 const sendAllUsers = require('../controllers').sendAllUsers;
 
 // Обрабатываем GET-запрос с роутом '/categories'
 usersRouter.get('/users', findAllUsers, sendAllUsers);
 
 // Экспортируем роут для использования в приложении — app.js
 module.exports = usersRouter;
