const express = require("express");
const app = (module.exports = express());

const authRouter = require("./auth.route");
const taskRouter = require("./task.route");

app.use("/api/auth", authRouter);
app.use("/api/task", taskRouter);

module.exports = app;
