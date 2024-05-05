const { sendAllUsers, sendUserCreated } = require("./users");
const { sendAllCategories, sendCategoryById, sendCategoryCreated } = require("./categories");
const { sendAllGames, sendGameById, sendGameCreated } = require("./games")

module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendAllUsers,
    sendUserCreated,
    sendAllGames,
    sendGameById,
    sendGameCreated,
};
