const mongoose = require('mongoose');


const ProductSchema = new.mongoose.Schema({
  _id: { type: Number, index: true, unique: true },
  product_id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: [{
    id: Number,
    feature: String,
    value: String
  }],
  related_products: [Number],
  styles: [{
    id: { type: Number, unique: true },
    productId: Number,
    name: String,
    original_price: Number,
    sale_price: Number,
    default: Boolean,
    photos: [{
      thumbnail_url: String,
      url: String
    }],
    skus: [{ id: { type: Number, unique: true }, styleId: Number, quantity: Number, size: String }]
  }]
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;