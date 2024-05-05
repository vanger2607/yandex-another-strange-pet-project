const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated } = require("./users");
const { sendAllCategories, sendCategoryById, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted } = require("./categories");
const { sendAllGames, sendGameById, sendGameCreated, sendGameUpdated, sendGameDeleted } = require("./games")

module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryUpdated,
    sendCategoryDeleted,
    sendAllUsers,
    sendUserCreated,
    sendUserById,
    sendUserUpdated,
    sendAllGames,
    sendGameById,
    sendGameCreated,
    sendGameUpdated,
    sendGameDeleted,
};
