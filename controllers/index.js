const { sendAllUsers, sendUserCreated } = require("./users");
const { sendAllCategories, sendCategoryCreated } = require("./categories");
const { sendAllGames, sendGameCreated } = require("./games")

module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendAllUsers,
    sendUserCreated,
    sendAllGames,
    sendGameCreated,
};
