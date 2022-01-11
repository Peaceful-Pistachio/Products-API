const server = require('./index');
server.app.listen(server.port, (err) => {
  err ?
    console.log(error) :
    console.log("Server listening on port:", server.port);
});