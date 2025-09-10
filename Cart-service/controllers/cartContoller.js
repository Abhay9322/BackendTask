import Cart from "../models/cart.js";

export const getCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) {
            cart = await Cart.create({ userId: req.user.userId, items: [] });
        }
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        if (!productId || !quantity) {
            return res.status(400).json({ message: "ProductId and quantity required" });
        }

        let cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) {
            cart = await Cart.create({ userId: req.user.userId, items: [] });
        }

        const itemIndex = cart.items.findIndex(
            (item) => item.productId.toString() === productId
        );

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const updateCartItem = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        if (!productId || !quantity) {
            return res.status(400).json({ message: "ProductId and quantity required" });
        }

        const cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const item = cart.items.find(
            (i) => i.productId.toString() === productId
        );
        if (!item) return res.status(404).json({ message: "Item not found in cart" });

        item.quantity = quantity;
        await cart.save();

        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;

        const cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.items = cart.items.filter(
            (item) => item.productId.toString() !== productId
        );
        await cart.save();

        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const clearCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.items = [];
        await cart.save();

        res.json({ message: "Cart cleared", cart });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
