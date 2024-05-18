const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const { usersRouter, gamesRouter, categoriesRouter, apiRouter, pagesRouter } = require("./routes");
const cors = require("./midllewares").cors

const connectToDatabase = require("./database/connect");

const CONFIG = require("./config");
const PORT = CONFIG.PORT;

const app = express();

connectToDatabase();

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, "public")),
    usersRouter,
    gamesRouter,
    categoriesRouter,
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});
