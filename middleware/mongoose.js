import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDb = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) return handler(req, res);

  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    return handler(req, res);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return res.status(500).json({ error: "Database connection failed" });
  }
};

export default connectDb;
