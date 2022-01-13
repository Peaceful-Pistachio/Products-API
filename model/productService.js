const Product = require('./productModel');

const getSomeProducts = (page, count, cb) => {
  let productsPerPage = count;
  let whichPage = page - 1;

  Product.find({}, '-_id product_id name description category default_price')
    .limit(count)
    .skip(productsPerPage * whichPage)
    .sort({ product_id: 'asc'})
    .exec((err, data) => {
      err ?
        console.log(err):
        cb(data);
    });
}

// let fields = { "_id" : 0,  "product_id": 1, "name": 1, "description": 1, "category": 1, "default_price": 1, "features": 1, "features._id": 0 };

const getSpecificProduct = (product_id, cb) => {
  Product.findOne({ product_id: product_id }, ' -_id product_id name description category default_price features.feature features.value')
    .exec((err, data) => {
      err ?
        console.log(err):
        cb(data);
    });
}

const getProductStyles = (product_id, cb) => {
  Product.findOne({ product_id: product_id }, '-_id styles.id styles.name styles.sales_price styles.original_price styles.default_style styles.photos.url styles.photos.thumbnail_url styles.skus.id styles.skus.size styles.skus.quantity  ')
    .exec((err, data) => {
      err ?
        cb(err) :
        cb(data);
    });
}

const getRelatedProducts = (product_id, cb) => {
  Product.findOne({ product_id: product_id }, '-_id related_products')
    .exec((err, data) => {
      err ?
        cb(err) :
        cb(data.related_products);
    });
}

const searchForProduct = (search_text, cb) => {
  Product.find({"name":  { "$regex": search_text, "$options": "i" } }, '-_id product_id name description category default_price features.feature features.value')
    .sort({ product_id: 'asc'})
    .exec((err, data) => {
      err ?
        console.log(err):
        cb(data);
    });
}

module.exports = { getProductStyles, getRelatedProducts, getSomeProducts, getSpecificProduct, searchForProduct };
