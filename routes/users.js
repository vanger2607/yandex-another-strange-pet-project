// Создаём роут для запросов категорий 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const { findAllUsers, createUser, findUserById, updateUser } = require('../midllewares');

const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated } = require('../controllers');

// Обрабатываем GET-запрос с роутом '/categories'
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
);

usersRouter.put(
    "/users/:id", // Слушаем запросы по эндпоинту
    updateUser, // Обновляем запись в MongoDB
    sendUserUpdated // Возвращаем ответ на клиент
  ); 

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
