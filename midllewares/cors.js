const CONFIG = require("../config")
const ALLOWED_CORS = CONFIG.ALLOWED_CORS.split("\s?[, ]\s?")
const logger = require("../logger")
function cors(req, res, next) {
    const { origin } = req.headers;
    if (ALLOWED_CORS.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    else {
        res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        res.setHeader('Access-Control-Allow-Origin', origin);
        logger.info(`headers 2: ${res.header}`)
    }
    next();
} 

module.exports = cors;
