import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    items: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    status: { type: [PLACED, CONFIRMED, SHIPPED, DELIVERED, CANCELLED] },
    history: { type: String }
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);