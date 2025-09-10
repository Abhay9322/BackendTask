import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/products", getProducts);
router.post("/products/:id", auth, createProduct);
router.put("/products/:id", auth, updateProduct);
router.delete("/products/:id", auth, deleteProduct);

export default router;