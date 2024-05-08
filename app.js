const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const { usersRouter, gamesRouter, categoriesRouter } = require("./routes");

const connectToDatabase = require("./database/connect");

const CONFIG = require("./config");
const PORT = CONFIG.PORT;

const apiRouter = require("./routes").apiRouter;

const app = express();

connectToDatabase();

app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    usersRouter,
    gamesRouter,
    categoriesRouter,
    apiRouter,
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});
