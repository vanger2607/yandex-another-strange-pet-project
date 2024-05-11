const { findAllUsers, findUserById, createUser, updateUser, deleteUser, hashPassword } = require("./users");
const { findAllCategories, findCategoryById, createCategory, updateCategory, deleteCategory } = require("./categories");
const { findAllGames, findGameById, createGame, updateGame, deleteGame } = require("./games")
const checkAuth = require("./auth");
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
    deleteUser,
    hashPassword,
    checkAuth,
    findAllGames,
    findGameById,
    createGame,
    updateGame,
    deleteGame
};
