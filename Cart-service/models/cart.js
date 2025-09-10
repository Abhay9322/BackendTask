import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    titleSnapshot: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    priceSnapshot: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    quantity: { type: mongoose.Schema.Types.ObjectId, ref: "product" }
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;