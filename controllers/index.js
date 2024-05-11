const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require("./users");
const { sendAllCategories, sendCategoryById, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted } = require("./categories");
const { sendAllGames, sendGameById, sendGameCreated, sendGameUpdated, sendGameDeleted } = require("./games")
const { login, sendIndex } = require("./auth");
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
    sendUserDeleted,
    login,
    sendIndex,
    sendAllGames,
    sendGameById,
    sendGameCreated,
    sendGameUpdated,
    sendGameDeleted,
};
