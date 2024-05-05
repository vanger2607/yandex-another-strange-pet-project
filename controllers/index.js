const sendAllUsers = require("./users");
const sendAllCategories = require("./categories");
const {sendAllGames, sendGamesCreated} = require("./games")

module.exports = { sendAllCategories, sendAllUsers, sendAllGames, sendGamesCreated };
