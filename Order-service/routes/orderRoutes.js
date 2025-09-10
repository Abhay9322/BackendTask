import express from "express";
import {
    createOrder,
    getMyOrders,
    getOrderById,
    cancelOrder,
    getAllOrders,
    updateOrderStatus,
} from "../controllers/orderController.js";
import { protect, isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.post("/:id/cancel", protect, cancelOrder);

router.get("/admin/all", protect, isAdmin, getAllOrders);
router.patch("/admin/:id/status", protect, isAdmin, updateOrderStatus);

export default router;
