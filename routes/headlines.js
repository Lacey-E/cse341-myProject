const express = require("express");
const Router = express.Router();

const headlinesController = require("../controllers/headlines");

Router.get("/", headlinesController.getAll);

Router.get("/:id", headlinesController.getSingle);

Router.post("/", headlinesController.createContact);


module.exports = Router;
