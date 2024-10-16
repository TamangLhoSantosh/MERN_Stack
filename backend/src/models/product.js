const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_name: {
    type: String,
    required: true,
    unique: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  product_image: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
