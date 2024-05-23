const CONFIG = require("../config")
const ALLOWED_CORS = CONFIG.ALLOWED_CORS.split(", ")
const logger = require("../logger")
function cors(req, res, next) {
    const { origin } = req.headers;
    logger.info(`ALLOWED CORS: ${ALLOWED_CORS}`);
    if (ALLOWED_CORS.indexOf(origin) > -1) {
        logger.info(`origin get acess: ${origin}`)
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, ");
       
    }
    next();
}

module.exports = cors;
