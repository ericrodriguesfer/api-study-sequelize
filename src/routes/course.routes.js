import { celebrate, Segments } from "celebrate";
import { Router } from "express";

import CourseController from "../controllers/CourseController.js";
import { createCourseValidator } from "../validations/validations.js";

const courses = Router();

courses.get("/", new CourseController().listAll);
courses.get("/with-teacher", new CourseController().listAllWithTeacher);
courses.post(
  "/",
  celebrate({ [Segments.BODY]: createCourseValidator }),
  new CourseController().create
);

export default courses;
