import express from "express";

import {
  oneStudentData,
  register,
  studentData,
  classList,
  filterByClass,
} from "./controller.mjs";
import { adminPermission } from "../middlewares/authorization.mjs";
import auth from "../middlewares/authentication.mjs";

const router = express.Router();
router.post("/register", register);
router.route("/classes").get(auth, adminPermission.permission, classList);
router
  .route("/filterByClass/:studentClass")
  .get(auth, adminPermission.permission, filterByClass);
router.route("/").get(auth, adminPermission.permission, studentData);
router
  .route("/:studentId")
  .get(auth, adminPermission.permission, oneStudentData);

export default router;
