import Course from "../../models/Course.js";

class ListAllCoursesWithTeacherService {
  async execute() {
    const courses = await Course.findAll({
      include: { association: "teachers" },
    });

    return courses;
  }
}

export default new ListAllCoursesWithTeacherService();
