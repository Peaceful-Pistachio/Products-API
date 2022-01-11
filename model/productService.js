const Product = require('./productModel');

const getSomeProducts = (product_id, page, count, cb) => {
  let productsPerPage = count;
  let whichPage = page - 1;

  Product.find()
    .limit(count)
    .skip(productsPerPage * whichPage)
    .sort({ product_id: 'asc'})
    .exec((err, data) => {
      err ?
        cb(err):
        cb(data);
    });
}

const getSpecificProduct = (product_id, cb) => {
  Product.find({ product_id: product_id })
    .exec((err, data) => {
      err ?
        console.error(err) :
        cb(data);
    });
}

const getProductStyles = (product_id) => {

}

const getRelatedProducts = (product_id) => {

}

module.exports = { getProductStyles, getRelatedProducts, getSomeProducts, getSpecificProduct };
