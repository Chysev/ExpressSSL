const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const fs = require("fs");
const http = require("http");
const https = require("https");
const app = express();

app.set("view engine", "ejs");
app.set("views", "pages");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Uncomment this if you have SSL certificate
// const options = {
//  key: fs.readFileSync("key.pem"),
//  cert: fs.readFileSync("cert.pem"),
// };

http.createServer(app).listen(process.env.HTTP_PORT);
// Uncomment this if you have SSL certificate
// https.createServer(options, app).listen(process.env.HTTPS_PORT);
