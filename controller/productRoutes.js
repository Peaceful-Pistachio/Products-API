const express = require('express');
var router = express.Router()

//Basic Routes
router.get('/', (req, res) => {
  res.send('Here are some products');
});

router.get('/:product_id', (req, res) => {
  res.send('Here are some products for products #', req.params.product_id);
});

router.get('/:product_id/styles', (req, res) => {
  res.send('Here are some styles for products #', req.params.product_id);
});

router.get('/:product_id/related', (req, res) => {
  res.send('Here are some related products for products #', req.params.product_id);
});


//Helper Functions
const sendNoProductError = (product_id) => {
  return `I'm sorry, product ID #${product_id} could not be found.`
};


//Router Export
module.exports = router;



