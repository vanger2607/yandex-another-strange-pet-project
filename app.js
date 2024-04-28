const express = require("express");
const path = require("path");


const CONFIG = require("./config")
const app = express();
console.log(CONFIG)
app.use(
  express.static(path.join(__dirname, "public")),
);

app.listen(CONFIG.port, () => {
  console.log(`Server is running at PORT http://localhost:${CONFIG.port}`);
});
