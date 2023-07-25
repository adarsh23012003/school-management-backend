import Student from "./model.mjs";
import ServerError from "../Error/ServerError.mjs";
import catchAsync from "../Error/catchAsync.mjs";

const register = catchAsync(async (req, res, next) => {
  // if (
  //   !req.body.fullName ||
  //   !req.body.fatherName ||
  //   !req.body.motherName ||
  //   !req.body.address ||
  //   !req.body.email ||
  //   !req.body.mobileNumber ||
  //   !req.body.category ||
  //   !req.body.gender ||
  //   !req.body.dob ||
  //   !req.body.studentClass ||
  //   !req.body.image
  // ) {
  //   return next(new ServerError("Some field not supplied", 400));
  // }
  //   const storage = multer.diskStorage
  // const student = new Student(req.body);
  // await student.save();
  // res.json("cool");

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
  const image = req.file.path;

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
  let studentClassList = [];
  student.forEach((element) => {
    studentClassList.push(element.studentClass);
  });
  res.json({
    studentClassList,
  });
});

const filterByClass = catchAsync(async (req, res, next) => {
  const student = await Student.find();
  let filterByClassData = [];
  student.forEach((element) => {
    if (element.studentClass == req.body.studentClassName) {
      filterByClassData.push(element);
    }
  });
  res.json({
    filterByClassData,
  });
});

export { register, studentData, oneStudentData, classList, filterByClass };
