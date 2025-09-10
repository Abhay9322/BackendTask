import express from "express";
import cartRoute from "./routes/cartRoute.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

connectDB();


app.use("/cart", cartRoute);

app.listen(8000, () => {
    console.log(`server running on port 8000`);

});