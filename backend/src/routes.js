const express = require("express");
const routes = express.Router();

const SuggestController = require("./controllers/SuggestController.js");

routes.get("/", SuggestController.show);
routes.post("/suggest", SuggestController.create);

module.exports = routes;
