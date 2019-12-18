const app = require("express")();
const consign = require("consign");
const db = require("./config/db");

app.db = db;

consign()
  .then("./config/middlewares.js")
  .then("./api/validation.js")
  .then("./api")
  .then("./config/routes.js")
  .into(app);

app.listen(3333, () => {
  console.log("Backend executando na porta 3333...");
});
