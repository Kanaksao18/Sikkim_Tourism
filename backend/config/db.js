import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully 🚀");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    throw err; // Re-throw to prevent server from starting without DB
  }
};

