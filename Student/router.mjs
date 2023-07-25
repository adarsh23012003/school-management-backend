import express from "express";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import {
  oneStudentData,
  register,
  studentData,
  classList,
  filterByClass,
} from "./controller.mjs";

const router = express.Router();
router.post("/register", upload.single("image"), register);
router.get("/classes", classList);
router.get("/filterByClass", filterByClass);
router.get("/", studentData);
router.get("/:studentId", oneStudentData);

export default router;
