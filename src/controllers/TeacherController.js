import CreateTeacherService from "../services/teachers/CreateTeacherService.js";
import ListAllTeachersService from "../services/teachers/ListAllTeachersService.js";

class TeacherController {
  async listAll(request, response) {
    const { page, size } = request.query;

    const teachers = await ListAllTeachersService.execute(page, size);

    return response.status(200).json(teachers);
  }

  async create(request, response) {
    const { name } = request.body;

    const teacher = await CreateTeacherService.execute(name);

    return response.status(200).json(teacher);
  }
}

export default TeacherController;
