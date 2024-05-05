// Создаём роут для запросов категорий
const usersRouter = require("express").Router();

// Импортируем вспомогательные функции
const {
    findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
} = require("../midllewares");

const {
    sendAllUsers,
    sendUserCreated,
    sendUserById,
    sendUserUpdated,
    sendUserDeleted,
} = require("../controllers");

const {
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
} = require("../midllewares/validators");
// Обрабатываем GET-запрос с роутом '/categories'
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    sendUserCreated
);

usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
);

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
