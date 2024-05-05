const gamesRouter = require('express').Router();

const {findAllGames, createGame, findGameById} = require('../midllewares');
const {sendAllGames, sendGameCreated, sendGameById} = require('../controllers');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById); 
gamesRouter.post('/games', findAllGames, createGame, sendGameCreated);
module.exports = gamesRouter; 
