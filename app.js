const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');

const connectToDatabase = require('./database/connect');


const CONFIG = require("./config")

const app = express();

connectToDatabase();

app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  usersRouter, 
  gamesRouter, 
  categoriesRouter
);

app.listen(CONFIG.PORT); 
