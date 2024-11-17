import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONOGDB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database connected successfully.");
  } catch (error) {
    console.log("database connection failed!");
    process.exit(0);
  }
};

export default connectDB;
