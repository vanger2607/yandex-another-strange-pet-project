const gamesRouter = require("./games");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");

const apiRouter = require("express").Router();
apiRouter.use("/api", gamesRouter, usersRouter, categoriesRouter);
module.exports = apiRouter;

