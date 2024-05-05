const { sendAllUsers, sendUserCreated, sendUserById } = require("./users");
const { sendAllCategories, sendCategoryById, sendCategoryCreated, sendCategoryUpdated } = require("./categories");
const { sendAllGames, sendGameById, sendGameCreated, sendGameUpdated } = require("./games")

module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryUpdated,
    sendAllUsers,
    sendUserCreated,
    sendUserById,
    sendAllGames,
    sendGameById,
    sendGameCreated,
    sendGameUpdated,
};
