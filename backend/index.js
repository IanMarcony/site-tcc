const express = require("express");
const routes = require("./src/routes.js");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Server rodando! Disponível em http://localhost:3333");
});
