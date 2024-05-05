const { findAllUsers, findUserById, createUser } = require("./users");
const { findAllCategories, findCategoryById, createCategory, updateCategory } = require("./categories");
const { findAllGames, findGameById, createGame, updateGame } = require("./games")
module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    findAllUsers,
    findUserById,
    createUser,
    findAllGames,
    findGameById,
    createGame,
    updateGame
};
