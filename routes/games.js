const gamesRouter = require('express').Router();

const findAllGames = require('../middlewares').findAllGames;
const sendAllGames = require('../controllers').sendAllGames;

gamesRouter.get('/games', findAllGames, sendAllGames);

module.exports = gamesRouter; 
