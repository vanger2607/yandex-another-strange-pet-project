// Создаём роут для запросов категорий 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const { findAllUsers, createUser, findUserById } = require('../midllewares');

const { sendAllUsers, sendUserCreated, sendUserById } = require('../controllers');

// Обрабатываем GET-запрос с роутом '/categories'
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
);
// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
