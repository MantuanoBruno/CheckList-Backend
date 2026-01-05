const express = require("express");
const app = express();

const statusRoutes = require("./api/v1/status/status.routes");

app.use("/api/v1", statusRoutes);

module.exports = app;
