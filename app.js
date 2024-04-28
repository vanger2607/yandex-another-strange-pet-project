const express = require("express");
const path = require("path");


const PORT = require("./config")
const app = express();

app.use(
  express.static(path.join(__dirname, "public")),
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
