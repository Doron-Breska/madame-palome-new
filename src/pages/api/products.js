import connectMongoDB from "../../../lib/mongoose";
import Product from "../../../models/product";

export default async function GET(req, res) {
  await connectMongoDB();
  res.json(await Product.find().exec());
}
