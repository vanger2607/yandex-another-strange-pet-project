const { findAllUsers, findUserById, createUser } = require("./users");
const { findAllCategories, findCategoryById, createCategory } = require("./categories");
const { findAllGames, findGameById, createGame } = require("./games")
module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    findAllUsers,
    findUserById,
    createUser,
    findAllGames,
    findGameById,
    createGame,
};
