const gamesRouter = require('express').Router();

const findAllGames = require('../midllewares').findAllGames;
const sendAllGames = require('../controllers').sendAllGames;

gamesRouter.get('/games', findAllGames, sendAllGames);

module.exports = gamesRouter; 
