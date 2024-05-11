const gamesRouter = require("./games");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");
const authRouter = require("./auth");
const apiRouter = require("express").Router();
apiRouter.use("/api", gamesRouter, usersRouter, categoriesRouter, authRouter);
module.exports = apiRouter;
