import Student from "./model.mjs";
import ServerError from "../Error/ServerError.mjs";
import catchAsync from "../Error/catchAsync.mjs";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "djiymg314",
  api_key: "262539191658251",
  api_secret: "sWITdZDUzNJ5cvYRyr9dd6QkRjA",
  secure: true,
});

const register = catchAsync(async (req, res, next) => {
  const file = req.files.image;
  cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
    if (result) {
      const fullName = req.body.fullName;
      const fatherName = req.body.fatherName;
      const motherName = req.body.motherName;
      const address = req.body.address;
      const email = req.body.email;
      const mobileNumber = req.body.mobileNumber;
      const category = req.body.category;
      const gender = req.body.gender;
      const dob = req.body.dob;
      const studentClass = req.body.studentClass;
      const image = result.url;

      const student = new Student({
        fullName: fullName,
        fatherName: fatherName,
        motherName: motherName,
        address: address,
        email: email,
        mobileNumber: mobileNumber,
        category: category,
        gender: gender,
        dob: dob,
        studentClass: studentClass,
        image: image,
      });
      await student.save();
    } else {
      console.log(err);
    }
  });

  res.json("Added successfully");
});
const studentData = catchAsync(async (req, res, next) => {
  const student = await Student.find();
  res.json({
    student,
  });
  res.json(student);
});

const oneStudentData = catchAsync(async (req, res, next) => {
  const student = await Student.findById(req.params.studentId);
  if (!student) {
    return next(new ServerError("theater not found", 404));
  }

  res.json({
    student,
  });
});

const classList = catchAsync(async (req, res, next) => {
  const student = await Student.find();
  let data = [];
  student.forEach((element) => {
    data.push(element.studentClass);
  });
  // removeDuplicates in array
  let studentClassList = [...new Set(data)];
  res.json({
    studentClassList,
  });
});

const filterByClass = catchAsync(async (req, res, next) => {
  if (!req.params.studentClass) {
    return next(new ServerError("studentClass field not supplied", 400));
  }
  const student = await Student.find();
  let filterByClassData = [];
  student.forEach((element) => {
    if (element.studentClass == req.params.studentClass) {
      filterByClassData.push(element);
    }
  });
  res.json({
    filterByClassData,
  });
});

export { register, studentData, oneStudentData, classList, filterByClass };
