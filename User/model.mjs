import mongoose from "mongoose";
import validate from "validator";
import jwt from "jsonwebtoken";

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
    enum: ["Admin"],
  },
  createdAt: {
    type: Date,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isNew) {
    this.role = "User";
    this.createdAt = Date.now();
  }
  next();
});

// Create Token
userSchema.methods.genToken = function () {
  return jwt.sign({ id: this.id }, process.env.SECRET, {
    expiresIn: process.env.TOKEN_VALIDITY,
  });
};

// model defined
const User = mongoose.model("user", userSchema, "users");

export default User;
