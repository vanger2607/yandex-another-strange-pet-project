const { findAllUsers, findUserById, createUser, updateUser } = require("./users");
const { findAllCategories, findCategoryById, createCategory, updateCategory, deleteCategory } = require("./categories");
const { findAllGames, findGameById, createGame, updateGame, deleteGame } = require("./games")
module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
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
