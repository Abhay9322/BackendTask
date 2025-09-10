import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
    {
        productId: { type: mongoose.Schema.Types.ObjectId, required: true },
        titleSnapshot: { type: String, required: true },
        priceSnapshot: { type: Number, required: true },
        quantity: { type: Number, required: true, min: 1 },
    },
    { _id: false }
);

const orderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        items: [itemSchema],
        subtotal: { type: Number, required: true },
        status: {
            type: String,
            enum: ["PLACED", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"],
            default: "PLACED",
        },
        history: [
            {
                status: String,
                updatedAt: { type: Date, default: Date.now },
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
