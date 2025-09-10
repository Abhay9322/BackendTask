import express from "express";
import authRoute from "./routes/authRoute.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

connectDB();


app.use("/auth", authRoute);

app.listen(3000, () => {
    console.log(`server running on port 3000`);

});