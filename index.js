const express = require('express');
const app = express();
const cors = require('cors');

//Import Routes
const productRouter = require('./controller/productRoutes');

//Server Settings
let port = process.env.port || 3000;

//Middleware Setup
app.use('/products', productRouter);
app.use(express.json());
app.use(cors());

//Not Found Middleware
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Basic Routes for Testing
app.get('/hello-world', (req, res) => {
  res.json({message: 'Hello World!'})
});

module.exports = { app, port }