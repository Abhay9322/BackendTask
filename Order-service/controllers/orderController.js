import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
    try {
        const { items, subtotal } = req.body;
        if (!items || !subtotal) {
            return res.status(400).json({ message: "Items and subtotal required" });
        }

        const order = await Order.create({
            userId: req.user.userId,
            items,
            subtotal,
            history: [{ status: "PLACED" }],
        });

        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.userId });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({
            _id: req.params.id,
            userId: req.user.userId,
        });
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const cancelOrder = async (req, res) => {
    try {
        const order = await Order.findOne({
            _id: req.params.id,
            userId: req.user.userId,
        });
        if (!order) return res.status(404).json({ message: "Order not found" });

        if (["DELIVERED", "CANCELLED"].includes(order.status)) {
            return res
                .status(400)
                .json({ message: `Cannot cancel order in ${order.status} state` });
        }

        order.status = "CANCELLED";
        order.history.push({ status: "CANCELLED" });
        await order.save();

        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const validStatuses = [
            "PLACED",
            "CONFIRMED",
            "SHIPPED",
            "DELIVERED",
            "CANCELLED",
        ];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }

        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });

        order.status = status;
        order.history.push({ status });
        await order.save();

        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
