import mongoose from "mongoose";

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/orderservice");
        console.log("order-service connected to mongoDB")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;