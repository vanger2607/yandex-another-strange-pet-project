// Создаём роут для запросов категорий 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const { findAllUsers, createUser, findUserById, updateUse, deleteUser } = require('../midllewares');

const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers');

// Обрабатываем GET-запрос с роутом '/categories'
usersRouter.get('/users',
    findAllUsers,
    sendAllUsers);
usersRouter.get("/users/:id",
    findUserById,
    sendUserById);
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

usersRouter.delete("/users/:id",
    deleteUser,
    sendUserDeleted);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
