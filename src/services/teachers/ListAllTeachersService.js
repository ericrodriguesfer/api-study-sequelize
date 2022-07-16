import Teacher from "../../models/Teacher.js";

class ListAllTeachersService {
  async execute() {
    const teachers = await Teacher.findAll();

    return teachers;
  }
}

export default new ListAllTeachersService();
