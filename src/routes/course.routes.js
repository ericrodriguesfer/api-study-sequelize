import { celebrate, Segments } from "celebrate";
import { Router } from "express";

import CourseController from "../controllers/CourseController.js";
import authenticated from "../middlewares/authenticated.js";
import {
  checkTokenValidator,
  createCourseValidator,
} from "../validations/validations.js";

const courses = Router();

courses.use(authenticated);

courses.get(
  "/",
  celebrate({ [Segments.HEADERS]: checkTokenValidator }),
  new CourseController().listAll
);
courses.get(
  "/with-teacher",
  celebrate({ [Segments.HEADERS]: checkTokenValidator }),
  new CourseController().listAllWithTeacher
);
courses.post(
  "/",
  celebrate(
    { [Segments.BODY]: createCourseValidator },
    { [Segments.HEADERS]: checkTokenValidator }
  ),
  new CourseController().create
);

export default courses;
