import CreateCourseService from "../services/courses/CreateCourseService.js";
import ListAllCoursesService from "../services/courses/ListAllCoursesService.js";
import ListAllCoursesWithTeacherService from "../services/courses/ListAllCoursesWithTeacherService.js";

class CourseController {
  async listAll(request, response) {
    const { page, size } = request.query;

    const courses = await ListAllCoursesService.execute(page, size);

    return response.status(200).json(courses);
  }

  async listAllWithTeacher(request, response) {
    const { page, size } = request.query;

    const courses = await ListAllCoursesWithTeacherService.execute(page, size);

    return response.status(200).json(courses);
  }

  async create(request, response) {
    const { name, id_teacher } = request.body;

    const course = await CreateCourseService.execute(name, id_teacher);

    return response.status(200).json(course);
  }
}

export default CourseController;
