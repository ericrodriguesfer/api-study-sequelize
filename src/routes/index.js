import { Router } from "express";

import courses from "./course.routes.js";
import session from "./session.routes.js";
import teacher from "./teacher.routes.js";

const routes = Router();

routes.use("/courses", courses);
routes.use("/teacher", teacher);
routes.use("/session", session);

export default routes;
