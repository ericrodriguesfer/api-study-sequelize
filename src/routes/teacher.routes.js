import { celebrate, Segments } from "celebrate";
import { Router } from "express";

import TeacherController from "../controllers/TeacherController.js";
import authenticated from "../middlewares/authenticated.js";
import {
  checkTokenValidator,
  createTeacherValidator,
} from "../validations/validations.js";

const teachers = Router();

teachers.use(authenticated);

teachers.get(
  "/",
  celebrate({ [Segments.HEADERS]: checkTokenValidator }),
  new TeacherController().listAll
);
teachers.post(
  "/",
  celebrate(
    { [Segments.BODY]: createTeacherValidator },
    { [Segments.HEADERS]: checkTokenValidator }
  ),
  new TeacherController().create
);

export default teachers;
