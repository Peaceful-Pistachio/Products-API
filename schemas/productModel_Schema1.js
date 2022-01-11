const mongoose = require('mongoose');

const SKUSchema = new.mongoose.Schema({
  skuNumber: { type: Number, unique: true },
  quantity: Number,
  size: String
})

const StyleSchema = new.mongoose.Schema({
  style_id: { type: Number, unique: true },
  name: String,
  original_price: Number,
  sale_price: Number,
  default: Boolean,
  photos: [{
    thumbnail_url: String,
    url: String
  }],
  skus: [SKUSchema]
})

const RelatedSchema = new.mongoose.Schema({
  product_id: Number
})

const ProductSchema = new.mongoose.Schema({
  product_id: { type: Number, index: true, unique: true },
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  related_products: [RelatedSchema],
  styles: [StyleSchema],
  features: [{
    feature: String,
    value: String
  }]
});

const Product = mongoose.model('Product', ProductSchema);
const Style = mongoose.model('Style', StyleSchema);
const SKU = mongoose.model('SKU', SKUSchema);
const Related = mongoose.model('Related', RelatedSchema);


module.exports = { Product, Style, SKU, Related };