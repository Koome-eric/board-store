import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbUri = process.env.MONGODB_URI;
    if (!dbUri) {
      throw new Error('The MONGODB_URI is not defined in the environment variables.');
    }

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(dbUri);  // Now dbUri is guaranteed to be a string
      console.log("db connected");
    }
  } catch (error) {
    console.error("Failed to connect to database:", error);
  }
};

export default connectDB;
