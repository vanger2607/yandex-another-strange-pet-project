const authRouter = require("express").Router();
const login = require("../controllers/").login;

authRouter.post("/auth/login", login);

module.exports = authRouter;
