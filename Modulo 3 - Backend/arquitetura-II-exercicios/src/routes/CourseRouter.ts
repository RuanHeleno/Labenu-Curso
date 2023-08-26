import express from "express";

import { CoursesController } from "../controller/CoursesController";

export const coursesRouter = express.Router();

const coursesController = new CoursesController();

coursesRouter.get("/", coursesController.getAllCourses);
coursesRouter.get("/:id", coursesController.getCourseById);
coursesRouter.post("/", coursesController.createCourse);
coursesRouter.put("/:id", coursesController.editCourse);
coursesRouter.delete("/:id", coursesController.deleteCourse);