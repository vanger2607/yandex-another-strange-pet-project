const { findAllUsers, createUser } = require("./users");
const { findAllCategories, createCategory } = require("./categories");
const { findAllGames, findGameById, createGame } = require("./games")
module.exports = {
    findAllCategories,
    createCategory, findAllUsers,
    createUser,
    findAllGames,
    findGameById,
    createGame,
};
