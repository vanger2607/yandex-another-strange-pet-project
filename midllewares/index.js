const { findAllUsers, findUserById, createUser, updateUser, deleteUser, hashPassword } = require("./users");
const { findAllCategories, findCategoryById, createCategory, updateCategory, deleteCategory } = require("./categories");
const { findAllGames, findGameById, createGame, updateGame, deleteGame } = require("./games")
const {checkAuth, checkCookiesJWT} = require("./auth");
const cors = require("./cors")
module.exports = {
    cors,
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
    checkCookiesJWT,
    findAllGames,
    findGameById,
    createGame,
    updateGame,
    deleteGame
};
