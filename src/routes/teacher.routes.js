import { celebrate, Segments } from "celebrate";
import { Router } from "express";

import TeacherController from "../controllers/TeacherController.js";
import { createTeacherValidator } from "../validations/validations.js";

const teachers = Router();

teachers.get("/", new TeacherController().listAll);
teachers.post(
  "/",
  celebrate({ [Segments.BODY]: createTeacherValidator }),
  new TeacherController().create
);

export default teachers;
