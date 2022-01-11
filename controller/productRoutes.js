const express = require('express');
var router = express.Router()

//Basic Routes
router.get('/', (req, res) => {
  let page = req.params.page || 1;
  let count = req.params.count || 5;
  res.status(200).send(`Here are ${count} products from page ${page}`);
});

router.get('/:product_id', (req, res) => {
  res.status(200).send(`Here are some products for product #${req.params.product_id}`);
});

router.get('/:product_id/styles', (req, res) => {
  res.status(200).send(`Here are some styles for product #${req.params.product_id}`);
});

router.get('/:product_id/related', (req, res) => {
  res.status(200).send(`Here are some related products for products #${req.params.product_id}`);
});

//Helper Functions
const sendNoProductError = (product_id) => {
  return `I'm sorry, product ID #${product_id} could not be found.`
};

//Router Export
module.exports = router;



