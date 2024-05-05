const findAllUsers = require("./users");
const {findAllCategories, createCategory} = require("./categories");
const {findAllGames, createGame} = require("./games")
module.exports = { findAllCategories, createCategory, findAllUsers, findAllGames, createGame };
