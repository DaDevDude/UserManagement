import UserModel from "../model/schema.js";
import jwt from "jsonwebtoken";

export async function getAllUsers(req, res) {
  const users = await UserModel.find({});
  const filteredUsers = users.filter((user) => user.empId !== req.empId);
  res.json({ users: filteredUsers });
}

export async function getUser(req, res) {
  const { empId } = req.params;
  const user = await UserModel.findOne({ empId });
  res.json({ user });
}

export async function createUser(req, res) {
  const { empId } = req.body;

  const isPresent = await UserModel.findOne({ empId });
  if (isPresent) {
    return res.json({ message: "user already present" });
  }

  const newUser = new UserModel(req.body);
  await newUser.save();

  const pmId = req.body.productManagerId;
  if (pmId) {
    await UserModel.findOneAndUpdate(
      { empId: pmId },
      { $push: { employees: newUser.empId } },
      { new: true }
    );
  }

  res.json({ message: "user created successfully" });
}

export async function updateUser(req, res) {
  const { empId } = req.params;
  const isPresent = await UserModel.findOne({ empId });
  if (!isPresent) {
    return res.json({ message: "user not present" });
  }

  const user = await UserModel.findOneAndUpdate({ empId }, req.body, {
    new: true,
  });

  res.json({ user });
}

export async function deleteUser(req, res) {
  const { empId } = req.params;
  const isPresent = await UserModel.findOne({ empId });
  if (!isPresent) {
    return res.json({ message: "user not present" });
  }

  await UserModel.findOneAndDelete({ empId });
  res.json({ message: "user deleted successfully" });
}

export async function loginUser(req, res) {
  const { empId, password } = req.body;

  const user = await UserModel.findOne({ empId });
  if (!user) {
    return res.json({ message: "user not present" });
  }

  if (password !== user.password) {
    return res.json({ message: "Password Incorrect" });
  }

  const userPayload = {
    empId: user.empId,
    role: user.role,
    users: user.employees,
  };

  const token = jwt.sign(userPayload, process.env.JWT_SECRET);
  res.json({ token });
}
