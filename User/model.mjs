import mongoose from "mongoose";
import validate from "validator";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validate.isEmail,
      message: "please provide valid email",
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    default: "User",
    enum: "Admin",
  },
  createdAt: {
    type: Date,
  },
});

// model defined
const User = mongoose.model("user", userSchema, "users");

export default User;
