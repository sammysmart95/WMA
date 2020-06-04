const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
// const ejs = require("ejs");
dotenv.config({ path: "./config/config.env" });

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
let PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, process.env.IP, () =>
  console.log(`App is running in port ${PORT}`)
);
