const express = require('express');
const app = express();

let port = process.env.port || 3000;

app.get('/hello-world', (req, res) => {
  res.json({message: 'Hello World!'})

})

// app.listen(port, () => {
//   console.log('The server is running at port ' + port);
// })




module.exports = app