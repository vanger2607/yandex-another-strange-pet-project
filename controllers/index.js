const { sendAllUsers, sendUserCreated } = require("./users");
const { sendAllCategories, sendCategoryCreated } = require("./categories");
const { sendAllGames, sendGamesCreated } = require("./games")

module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendAllUsers,
    sendUserCreated,
    sendAllGames,
    sendGamesCreated,
};
