const {checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe} = require("./games")
const checkIsCategoryExists = require("./categories");
const {checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail} = require("./users");
module.exports = {
    checkEmptyFields,
    checkIsGameExists,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsCategoryExists,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,

  
};
