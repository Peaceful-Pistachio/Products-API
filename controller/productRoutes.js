const express = require('express');
const { get } = require('express/lib/request');
var router = express.Router()
const Product = require('../model/productService');

//Basic Routes
router.get('/', (req, res) => {
  let page = req.query.page || 1;
  let count = req.query.count || 5;
  Product.getSomeProducts(page, count, (data) => {
    res.status(200).send(data);
  });
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

router.get('/s/', (req, res) => {
  Product.searchForProduct(req.query.search_term, (data) => {
    res.status(200).send(data);
  });
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

router.get('/test/', (req, res) => {
  Product.getSpecificProduct(getRandomInt(1,1000011), (data) => {
    res.status(200).send(data);
  });
});

//Helper Functions
const sendNoProductError = (product_id) => {
  return `I'm sorry, product ID #${product_id} could not be found.`
};

//Router Export
module.exports = router;


