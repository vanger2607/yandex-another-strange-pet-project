const {checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists} = require("./games")
const {checkIsCategoryExists, checkIfCategoriesAvaliable} = require("./categories");
const {checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists} = require("./users");
module.exports = {
    checkEmptyFields,
    checkIsGameExists,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsCategoryExists,
    checkIfCategoriesAvaliable,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    checkIsUserExists,

  
};
