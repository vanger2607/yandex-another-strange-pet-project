 // Создаём роут для запросов категорий 
 const usersRouter = require('express').Router();
  
 // Импортируем вспомогательные функции
 const {findAllUsers, createUser} = require('../midllewares');

 const {sendAllUsers, sendUserCreated} = require('../controllers');
 
 // Обрабатываем GET-запрос с роутом '/categories'
 usersRouter.get('/users', findAllUsers, sendAllUsers);
 usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
  ); 
 // Экспортируем роут для использования в приложении — app.js
 module.exports = usersRouter;
