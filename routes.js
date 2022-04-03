const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const contatoController = require("./src/controllers/contatoController");
const middleware = require("./src/middlewares/middleware");

route.get("/", homeController.index);
route.get("/login", middleware.logado, loginController.index);
route.post("/login/register", middleware.logado, loginController.register);
route.get("/login/register", middleware.logado, middleware.loginRequired);
route.post("/login/login", middleware.logado, loginController.login);
route.get("/login/logout", loginController.logout);

route.get("/contato", middleware.loginRequired, contatoController.index);
route.get(
  "/contato/:id",
  middleware.loginRequired,
  contatoController.editIndex
);
route.post(
  "/contato/edit/:id",
  middleware.loginRequired,
  contatoController.edit
);
route.post(
  "/contato/register",
  middleware.loginRequired,
  contatoController.register
);
route.get(
  "/contato/delete/:id",
  middleware.loginRequired,
  contatoController.delete
);

module.exports = route;
