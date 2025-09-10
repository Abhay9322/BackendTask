import mongoose from "mongoose";
import connectDB from "../config/db";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    items: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    status: { type: [PLACED, CONFIRMED, SHIPPED, DELIVERED, CANCELLED] },
    history: { type: String }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default connectDB;