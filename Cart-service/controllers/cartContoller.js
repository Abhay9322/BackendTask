import Cart from "../models/cart.js";

export const getCarts = async (req, res) => {
    try {
        const cartItems = await Cart.find(req.user.id);
        if (!cartItems) {
            res.status(500).json("carts is empty");
        }
        res.status(200).json({ cartItems });
    } catch (error) {
        res.status(400).json({ message: "Something went wrong" });
    }
};

export const addTocart = async (req, res) => {
    const { productId, quantity } = req.body;

    const isExists = await Cart.find(productId, req.params.id);

    if (!isExists) {
        const product = await Cart({ productId, quantity });
    } else {
        const product = await Cart.quantity
        product = product + 1;
    }
};

export const updateCart = async (req, res) => {
    try {
        const { productId, description } = req.body;

        const productCart = req.user.Cart({ description: description });
        productCart.save();
        res.status(200).json("product updated successfully");
    } catch (error) {
        res.status(500).json("something went wrong");
    }

};

export const deleteProduct = async (req, res) => {
    try {
        await Cart.user.findByIdDelete(req.params.id)
        res.status(200).json({ message: "item removed from cart" });
    } catch (error) {
        res.status(500).json("something went wrong")
    }
}