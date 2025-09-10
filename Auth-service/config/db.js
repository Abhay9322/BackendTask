import mongoose from "mongoose";

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("user-service connected to mongoDB")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;