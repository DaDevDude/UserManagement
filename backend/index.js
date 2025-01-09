import express from "express";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
dotenv.config();

const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
app.use(express.json());
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
  connectDB();
});
