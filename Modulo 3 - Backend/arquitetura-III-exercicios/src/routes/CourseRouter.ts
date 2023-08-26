import express from "express";

import { CoursesController } from "../controller/CoursesController";
import { CourseBusiness } from "../business/CourseBusiness";
import { CoursesDatabase } from "../database/CoursesDatabase";

export const coursesRouter = express.Router();

const coursesController = new CoursesController(
  new CourseBusiness(new CoursesDatabase())
);

coursesRouter.get("/", coursesController.getAllCourses);
coursesRouter.get("/:id", coursesController.getCourseById);
coursesRouter.post("/", coursesController.createCourse);
coursesRouter.put("/:id", coursesController.editCourse);
coursesRouter.delete("/:id", coursesController.deleteCourse);
