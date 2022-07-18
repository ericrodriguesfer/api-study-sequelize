import jwt from "jsonwebtoken";

import { secret } from "../config/jwt.js";
import AppError from "../errors/AppError.js";

function authenticated(request, response, next) {
  try {
    const header = request.headers.authorization;

    if (!header) {
      throw new AppError("Token JWT is missing", "Bad Request", 400);
    }

    const [beader, token] = header.split(" ");

    const decoded = jwt.verify(token, secret);

    const { id, name, email, isAdmin } = decoded;

    request.user = {
      id,
      name,
      email,
      isAdmin,
    };

    return next();
  } catch (error) {
    if (error) {
      return response.status(error.code).json({
        message: error.message,
        status: error.status,
        code: error.code,
      });
    }

    return response.status(500).json({
      message: "This JWT token is invalid",
      status: "Internal Server Error",
      code: 500,
    });
  }
}

export default authenticated;
