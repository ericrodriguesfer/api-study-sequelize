import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import { expiresIn, secret } from "../../config/jwt.js";
import AppError from "../../errors/AppError.js";
import User from "../../models/User.js";

class CreateSessionService {
  async execute(email, password) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new AppError(
        "This user does not exists in our database",
        "NotFound Request",
        404
      );
    }

    if (!(await bcryptjs.compare(password, user.password))) {
      throw new AppError(
        "This password repassed does not match",
        "Unauthorized",
        401
      );
    }

    return jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isadmin,
      },
      secret,
      { expiresIn: expiresIn }
    );
  }
}

export default new CreateSessionService();
