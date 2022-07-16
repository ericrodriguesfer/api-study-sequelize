import AppError from "../../errors/AppError.js";
import Course from "../../models/Course.js";
import Teacher from "../../models/Teacher.js";

class CreateCourseService {
  async execute(name, id_teacher) {
    const existsCourseByName = await Course.findOne({ where: { name } });

    if (existsCourseByName) {
      throw new AppError(
        "There is already a course with that name",
        "Conflict Request",
        409
      );
    }

    const existsTeacherById = await Teacher.findByPk(id_teacher);

    if (!existsTeacherById) {
      throw new AppError(
        "Teacher does not exists in our database",
        "NotFound Request",
        404
      );
    }

    const course = await Course.create({ name, id_teacher });

    return course;
  }
}

export default new CreateCourseService();
