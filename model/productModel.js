const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  _id: { type: Number, index: true, unique: true },
  product_id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: [{
    feature: String,
    value: String
  }],
  related_products: [Number],
  styles: [{
    style_id: { type: Number, unique: true },
    name: String,
    original_price: Number,
    sale_price: Number,
    default: Boolean,
    photos: [{
      thumbnail_url: String,
      url: String
    }],
    skus: [{ sku: { type: Number, unique: true },quantity: Number, size: String }]
  }]
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;