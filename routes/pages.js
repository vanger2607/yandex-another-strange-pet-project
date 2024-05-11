const pagesRouter = require("express").Router();
const {sendIndex, sendDashboard} = require("../controllers/");
const {checkAuth, checkCookiesJWT} = require("../midllewares");
pagesRouter.get("/", sendIndex); 
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard); 
module.exports = pagesRouter;
