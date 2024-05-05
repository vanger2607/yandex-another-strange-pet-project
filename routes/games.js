const gamesRouter = require("express").Router();

const {
    findAllGames,
    createGame,
    findGameById,
    updateGame,
    deleteGame,
} = require("../midllewares");
const {
    sendAllGames,
    sendGameCreated,
    sendGameById,
    sendGameUpdated,
    sendGameDeleted,
} = require("../controllers");
const {
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkIfUsersAreSafe,
} = require("../midllewares/validators");
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    createGame,
    sendGameCreated
);

gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdated
);
gamesRouter.delete(
    "/games/:id", // Слушаем запросы по эндпоинту
    deleteGame,
    sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
);
module.exports = gamesRouter;
