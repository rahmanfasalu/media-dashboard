var jsonServer = require("json-server");
const querystring = require("querystring");
var server = jsonServer.create();
var router = jsonServer.router(require("./db.js")());
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(1337, function () {
  console.log("JSON Server is running");
});
