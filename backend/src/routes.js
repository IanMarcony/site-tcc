const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController.js");
const SuggestController = require("./controllers/SuggestController.js");

routes.post("/signin", UserController.signin);
routes.post("/register", UserController.create);
routes.get("/home", SuggestController.show);
routes.get("/home/logout", UserController.logout);
routes.post("/home/suggest", SuggestController.create);

module.exports = routes;
