import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Cart database connected succesfully");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

