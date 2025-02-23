import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGO_URL) {
  throw new Error("Please provide MONGO_URL in env file");
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connect MongoDB successfully");
        
    } catch (error) {
        console.log("MongoDB connect error",error);
        process.exit(1);
    }
}

export default connectDB;