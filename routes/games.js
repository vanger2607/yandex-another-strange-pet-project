const gamesRouter = require('express').Router();

const {findAllGames, createGame} = require('../midllewares');
const {sendAllGames, sendGameCreated} = require('../controllers');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, createGame, sendGameCreated);
module.exports = gamesRouter; 
