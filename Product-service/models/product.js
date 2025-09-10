import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    isActive: { type: String, default: false }
}, { timestamps: true });

export const Product = await mongoose.model("Product", productSchema);
