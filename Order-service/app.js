import express from "express";
import orderRoute from "./routes/orderRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

connectDB();


app.use("/orders", orderRoute);
app.use('/admin/orders', orderRoute)

app.listen(7000, () => {
    console.log(`server running on port 7000`);

});