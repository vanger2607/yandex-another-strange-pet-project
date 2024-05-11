const pagesRouter = require("express").Router();
const sendIndex = require("../controllers/auth.js").sendIndex;

pagesRouter.get("/", sendIndex); 

module.exports = pagesRouter;
