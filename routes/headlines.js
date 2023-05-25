const express = require("express");
const Router = express.Router();
const { headlineValidationRules, validate } = require('../validator.js');

const headlinesController = require("../controllers/headlines");

Router.get("/", headlinesController.getAll);

Router.get("/:id", headlinesController.getSingle);
// contactValidationRules(), validate, contactsController.createContact);

Router.delete("/:id", headlinesController.deleteHeadline);

Router.post("/", headlineValidationRules(), validate, headlinesController.createHeadline);
 

module.exports = Router;
