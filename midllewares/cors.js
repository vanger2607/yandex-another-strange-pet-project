const CONFIG = require("../config")
const ALLOWED_CORS = CONFIG.ALLOWED_CORS.split("\s?[, ]\s?")
function cors(req, res, next) {
    const { origin } = req.headers;
    
    if (ALLOWED_CORS.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    
    next();
} 

module.exports = cors;
