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

//Basic Routes for Testing
app.get('/hello-world', (req, res) => {
  res.json({ message: 'Hello World!' })
});

let htmlMessage = `<h1>Welcome!</h1><p>You have reached the HR-SDC products API. To consume this REST API, please visit one of the following links:</p>
  <ul>
    <li>
    <a href="/products">Products</a>
    </li>
    <li>
    <a href="/products/1">A Specific Product (#1)</a>
    </li>
    <li>
    <a href="/products/1/related">Related Products</a>
    </li>
    <li>
    <a href="/products/1/styles">Product Styles</a>
    </li>
  </ul>`;

  //Welcome Page
app.get('/', (req, res) => {
  res.setHeader('Content-type','text/html');
  res.status(200).send(htmlMessage);
});

app.get('/loaderio-b4d0ac2c41481e9702d38f174f5095d5/', (req, res) => {
  res.status(200).send('loaderio-b4d0ac2c41481e9702d38f174f5095d5');
});

//Not Found Middleware
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = { app, port }