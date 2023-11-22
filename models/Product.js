import mongoose, { models, model } from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  allergies: String,
  price: String,
  img: String,
});

const Product = models?.Product || model("Product", ProductSchema);

export default Product;
