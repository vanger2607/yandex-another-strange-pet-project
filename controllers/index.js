const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated } = require("./users");
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
    sendUserUpdated,
    sendAllGames,
    sendGameById,
    sendGameCreated,
    sendGameUpdated,
};
