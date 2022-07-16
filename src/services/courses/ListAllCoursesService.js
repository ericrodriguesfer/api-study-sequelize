import Course from "../../models/Course.js";

class ListAllCoursesService {
  async execute(teachers) {
    const courses = await Course.findAll();

    return courses;
  }
}

export default new ListAllCoursesService();
