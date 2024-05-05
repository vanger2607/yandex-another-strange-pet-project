const gamesRouter = require('express').Router();

const {findAllGames, createGame, findGameById, updateGame, deleteGame} = require('../midllewares');
const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require('../controllers');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById); 
gamesRouter.post('/games', findAllGames, createGame, sendGameCreated);
gamesRouter.put(
    "/games/:id", // Слушаем запросы по эндпоинту  
      findGameById, // Шаг 1. Находим игру по id из запроса
      // Шаг 2. Проверки, если нужны
      updateGame, // Шаг 3. Обновляем запись с игрой
      sendGameUpdated // Шаг 4. Возвращаем на клиент ответ с результатом обновления
  ); 
  gamesRouter.delete(
    "/games/:id", // Слушаем запросы по эндпоинту
    deleteGame,
    sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
  ); 
module.exports = gamesRouter; 
