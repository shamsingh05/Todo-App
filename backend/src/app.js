const express = require("express");
const app = express();
const todoRoutes = require("./routes.todo.routes");
app.use(express.json);

module.exports = app;