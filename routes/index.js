const express = require("express");
const Router = express.Router();
Router.use('/', require ('./swagger' ));
Router.use("/headlines", require("./headlines"));
Router.use("/auth", require("./authRoutes"));
Router.use("/editor", require("./editor"));
module.exports = Router;
