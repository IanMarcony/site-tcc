const express = require("express");
const routes = require("./src/routes.js");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(
    "Server rodando! Disponível em http://localhost:" +
      (process.env.PORT || 3333) +
      ""
  );
});
