import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  empId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["Intern", "PM", "Founder"],
  },
  password: {
    type: String,
    required: true,
  },
  productManagerId: {
    type: Number,
  },
  employees: {
    type: [Number],
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
