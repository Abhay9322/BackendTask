import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connection(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/productservice");
        console.log("MongoDB connected Succssfully");

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

export default connectDB;