const {checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest} = require("./games")
const {checkIsCategoryExists, checkEmptyName} = require("./categories");
const {checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists} = require("./users");
module.exports = {
    checkEmptyFields,
    checkIsGameExists,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsCategoryExists,
    checkEmptyName,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    checkIsUserExists,
    checkIsVoteRequest,
  
};
