import express from "express";
import { deleteProduct, getCarts } from "../controllers/cartContoller.js";

const router = express.Router();

router.get("/", getCarts);
router.post("/items", getCarts);
router.delete("/items/:productId", deleteProduct);

export default router;