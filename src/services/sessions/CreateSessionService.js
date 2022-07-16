import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import { expiresIn, secret } from "../../config/jwt.js";
import AppError from "../../errors/AppError.js";
import Admin from "../../models/Admin.js";

class CreateSessionService {
  async execute(email, password) {
    const admin = await Admin.findOne({ where: { email } });

    if (!admin) {
      throw new AppError(
        "This user does not exists in our database",
        "NotFound Request",
        404
      );
    }

    if (!(await bcryptjs.compare(password, admin.password))) {
      throw new AppError(
        "This password repassed does not match",
        "Unauthorized",
        401
      );
    }

    return jwt.sign(
      { id: admin.id, name: admin.name, email: admin.email },
      secret,
      { expiresIn: expiresIn }
    );
  }
}

export default new CreateSessionService();
