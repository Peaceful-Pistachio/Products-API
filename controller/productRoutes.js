const express = require('express');
var router = express.Router()
const Product = require('../model/productService');
require('dotenv').config()

const redis = require('redis');
const redisClient = redis.createClient({url: `redis://:${process.env.REDIS_PASS}@${process.env.REDIS_URL}:6379`});

redisClient.connect();

router.get('/test/', (req, res) => {
  let num = getRandomInt(1,1000011);
  Product.getSpecificProduct(num, (data) => {
    res.status(200).send(data);
  });
});

//Basic Routes
router.get('/', (req, res) => {
  let page = req.query.page || 1;
  let count = req.query.count || 5;
  Product.getSomeProducts(page, count, (data) => {
    res.status(200).send(data);
  });
});

router.get('/s',async (req, res) => {
  let searchTerm = req.query.s;

  let cached = await redisClient.get(searchTerm);
  if (!cached) {
    Product.searchForProduct(searchTerm, (data) => {
      redisClient.setEx(searchTerm, 3600, JSON.stringify(data));
      res.status(200).send(data);
    });
  } else {
    res.status(200).send(JSON.parse(cached));
  }
});

router.get('/:product_id', (req, res) => {
  Product.getSpecificProduct(req.params.product_id, (data) => {
    res.status(200).send(data);
  });
});

router.get('/:product_id/styles', (req, res) => {
  Product.getProductStyles(req.params.product_id, (data) => {
    res.status(200).send(data);
  });
});

router.get('/:product_id/related', (req, res) => {
  Product.getRelatedProducts(req.params.product_id, (data) => {
    res.status(200).send(data);
  });
});



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Helper Functions
const sendNoProductError = (product_id) => {
  return `I'm sorry, product ID #${product_id} could not be found.`
};

//Router Export
module.exports = router;


