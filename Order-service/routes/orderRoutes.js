import express from "express";
import { createOrder, getOrders, getSingleOrder, updateStatus } from "../controllers/orderController.js";
import auth from "../middleware/auth.js"

const router = express.Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.get("/:id", getSingleOrder);
router.get("/orders", auth, getOrders);
router.patch("/orders/:id/status", auth, updateStatus)