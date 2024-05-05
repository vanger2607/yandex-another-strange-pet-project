const findAllUsers = require("./users");
const findAllCategories = require("./categories");
const {findAllGames, createGame} = require("./games")
module.exports = { findAllCategories, findAllUsers, findAllGames, createGame };
