import { Order } from "../models/order.js";

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        return res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ message: "Somethig went wrong " });
    }
};

export const getSingleOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            res.status(400).json("order not found");
        }

        res.status(200).json({ order });
    } catch (error) {
        res.status(500).json("Something went wrong");
    }
}

export const createOrder = async (req, res) => {
    try {
        const { items, subtotal, status, history } = req.body;
        const order = await Order({ userId: user._id, items, subtotal, status, history });
        await order.save();

        res.status(200).json({ order });
    } catch (error) {

    }
}

export const getordersAdmin = async (req, res) => {
    try {
        const orders = await Order.find();
        if (!orders) {
            return res.status(400).json("order not found");
        }

        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json("something went wrong");
    }
}

export const getStatus = async (req, res) => {
    try {
        const status = await Order.findById(req.params.id, status);

        if (!status) {
            return res.status(400).json("Status not found");
        }

        status.status = req.body;

        res.status(200).json(status);
    } catch (error) {
        res.status(500).json(error.message)
    }
}