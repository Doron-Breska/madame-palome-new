import mongoose from "mongoose";

const connectMongoDB = () => {
  const mongoDBUri = process.env.MONGODB_URI;

  if (!mongoDBUri) {
    throw new Error("The MONGODB_URI is not defined.");
  }

  try {
    mongoose.connect(mongoDBUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectMongoDB;
