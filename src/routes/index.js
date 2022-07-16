import { Router } from "express";
import courses from "./course.routes.js";
import teacher from "./teacher.routes.js";

const routes = Router();

routes.use("/courses", courses);
routes.use("/teacher", teacher);

export default routes;
