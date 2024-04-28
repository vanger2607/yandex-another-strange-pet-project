const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const {usersRouter, gamesRouter, categoriesRouter} = require('./routes');


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
