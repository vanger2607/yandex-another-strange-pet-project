const { findAllUsers, findUserById, createUser } = require("./users");
const { findAllCategories, createCategory } = require("./categories");
const { findAllGames, findGameById, createGame } = require("./games")
module.exports = {
    findAllCategories,
    createCategory,
    findAllUsers,
    findUserById,
    createUser,
    findAllGames,
    findGameById,
    createGame,
};
