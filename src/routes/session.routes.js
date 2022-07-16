import { Router } from "express";

import SessionController from "../controllers/SessionController.js";

const session = Router();

session.post("/", new SessionController().create);

export default session;
