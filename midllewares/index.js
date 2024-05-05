const { findAllUsers, findUserById, createUser, updateUser } = require("./users");
const { findAllCategories, findCategoryById, createCategory, updateCategory } = require("./categories");
const { findAllGames, findGameById, createGame, updateGame, deleteGame } = require("./games")
module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    findAllGames,
    findGameById,
    createGame,
    updateGame,
    deleteGame
};
