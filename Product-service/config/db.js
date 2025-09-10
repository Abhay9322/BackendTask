import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connection(process.env.MONGO_URL);
        console.log("MongoDB connected Succssfully");

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}
