import mongoose from "mongoose";

export default function connectDB() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log("Error connecting DB = " + err.message));
}
