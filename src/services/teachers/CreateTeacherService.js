import AppError from "../../errors/AppError.js";
import Teacher from "../../models/Teacher.js";

class CreateTeacherService {
  async execute(name) {
    const existsTeacherByName = await Teacher.findOne({ where: { name } });

    if (existsTeacherByName) {
      throw new AppError(
        "There is already a teacher with that name",
        "Conflict Request",
        409
      );
    }

    const teacher = await Teacher.create({ name });

    return teacher;
  }
}

export default new CreateTeacherService();
