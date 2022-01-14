const express = require('express');
var router = express.Router()
const Product = require('../model/productService');

//Basic Routes
router.get('/', (req, res) => {
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

router.get('/search/:search_term', (req, res) => {
  Product.searchForProduct(req.params.search_term, (data) => {
    res.status(200).send(data);
  });
});


//Helper Functions
const sendNoProductError = (product_id) => {
  return `I'm sorry, product ID #${product_id} could not be found.`
};

//Router Export
module.exports = router;

// loaderio-c5db147d8d708c6f1a49a8f1b54a21e0


