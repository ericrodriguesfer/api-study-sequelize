import CreateCourseService from "../services/courses/CreateCourseService.js";
import ListAllCoursesService from "../services/courses/ListAllCoursesService.js";
import ListAllCoursesWithTeacherService from "../services/courses/ListAllCoursesWithTeacherService.js";

class CourseController {
  async listAll(request, response) {
    const courses = await ListAllCoursesService.execute();

    return response.status(200).json(courses);
  }

  async listAllWithTeacher(request, response) {
    const courses = await ListAllCoursesWithTeacherService.execute();

    return response.status(200).json(courses);
  }

  async create(request, response) {
    const { name, id_teacher } = request.body;

    const course = await CreateCourseService.execute(name, id_teacher);

    return response.status(200).json(course);
  }
}

export default CourseController;
