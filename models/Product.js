import mongoose, { models, model } from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingridients: String,
  allergies: {
    type: String,
    required: false, // This explicitly states that 'allergies' is optional
  },
  price: String,
  img: String,
  weekend: Boolean,
});

const Product = models?.Product || model("Product", ProductSchema);

export default Product;
