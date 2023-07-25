import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "fullName must be provided"],
  },
  fatherName: {
    type: String,
    required: [true, "fatherName must be provided"],
  },
  motherName: {
    type: String,
    required: [true, "motherName must be provided"],
  },
  address: {
    type: String,
    required: [true, "address must be provided"],
  },
  email: {
    type: String,
    required: [true, "address must be provided"],
  },
  mobileNumber: {
    type: Number,
    required: [true, "mobileNumber must be provided"],
  },
  dob: {
    type: String,
    required: [true, "address must be provided"],
  },
  category: {
    type: String,
    required: [true, "category must be provided"],
  },
  gender: {
    type: String,
    required: [true, "gender must be provided"],
  },
  studentClass: {
    type: Number,
    required: [true, "studentClass must be provided"],
  },
  image: {
    type: String,
    required: [true, "Image must be provided"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

// model defined
const Student = mongoose.model("Student", studentSchema, "students");

export default Student;
