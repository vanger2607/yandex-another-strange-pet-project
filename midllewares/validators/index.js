const {checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists} = require("./games")
const checkIsCategoryExists = require("./categories");
const {checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists} = require("./users");
module.exports = {
    checkEmptyFields,
    checkIsGameExists,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsCategoryExists,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    checkIsUserExists,

  
};
