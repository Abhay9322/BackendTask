import express from "express";
import productRoute from "./routes/productRoute.js";
import connectDB from "../Auth-service/config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

app.use("/", productRoute);

app.listen(4000, () => {
    console.log("Server running on port 4000");

});