const mongoose = require('mongoose');

const ProductSchema = new.mongoose.Schema({
  //fill in schema here
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;