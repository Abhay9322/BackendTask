import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/cartservice");
        console.log("Cart database connected succesfully");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

export default connectDB;
