const {checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe} = require("./games")
const checkIsCategoryExists = require("./categories");
const {checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail} = require("./users");
module.exports = {
    checkEmptyFields,
    checkIfCategoriesAvaliable,
    checkIsCategoryExists,
    checkIfUsersAreSafe,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,

  
};
