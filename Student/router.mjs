import express from "express";

import {
  oneStudentData,
  register,
  studentData,
  classList,
  filterByClass,
} from "./controller.mjs";

const router = express.Router();
router.post("/register", register);
router.get("/classes", classList);
router.get("/filterByClass/:studentClass", filterByClass);
router.get("/", studentData);
router.get("/:studentId", oneStudentData);

export default router;
