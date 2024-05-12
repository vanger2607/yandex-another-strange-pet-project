const CONFIG = require("../config");
const jwt = require("jsonwebtoken");
const SECRET_KEY = CONFIG.SECRET_KEY;
const logger = require("../logger");
const checkCookiesJWT = (req, res, next) => {
  if (!req.cookies.jwt) {
    return res.redirect("/");
  }
  req.headers.authorization = `Bearer ${req.cookies.jwt}`;
  next();
};


const checkAuth = (req, res, next) => {
  const { authorization } = req.headers;
  logger.info(`checkingauth: ${authorization}`)
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Необходима авторизация" });
  }

  const token = authorization.replace("Bearer ", "");
  try {
    req.user = jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return res.status(401).send({ message: "Необходима авторизация" });
  }
  logger.info("user verified");
  next();
};

module.exports = { checkAuth, checkCookiesJWT };
