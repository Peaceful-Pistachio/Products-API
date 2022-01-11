const mongoose = require('mongoose');

const ProductSchema = new.mongoose.Schema({
  product_id: { type: Number, index: true },
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
    style_id: Number,
    name: String,
    original_price: Number,
    sale_price: Number,
    default: Boolean,
    photos: [{
      thumbnail_url: String,
      url: String
    }],
    skus: [{
        SKUNumber: { quantity: Number, size: String }
      }]
  }]
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;