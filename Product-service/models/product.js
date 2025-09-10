import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        sku: { type: String, unique: true, required: true },
        stock: { type: Number, default: 0 },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);
