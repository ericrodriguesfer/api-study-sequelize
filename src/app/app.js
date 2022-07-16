import { errors } from "celebrate";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";

import "../database/index.js";
import AppError from "../errors/AppError.js";
import routes from "../routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.code).json({
      message: error.message,
      status: error.status,
      code: error.code,
    });
  }

  return response.status(500).json({
    message: "Error intern in server, please try again",
    status: "Internal Server Error",
    code: 500,
  });
});

export default app;
