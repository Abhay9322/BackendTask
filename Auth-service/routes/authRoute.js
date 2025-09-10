import express from "express";
import { login, me, signup } from "../controllers/authContoller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", me)

export default router;