import express, { response } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  loginUser,
  updateUser,
} from "../controllers/userControllers.js";
import { authMiddleware } from "../middlewares/middleware.js";
const userRouter = express.Router();

userRouter.get("/all", authMiddleware, getAllUsers);

userRouter.get("/:empId", getUser);

userRouter.post("/new", createUser);

userRouter.patch("/:empId", updateUser);

userRouter.delete("/:empId", deleteUser);

userRouter.post("/login", loginUser);

export default userRouter;
