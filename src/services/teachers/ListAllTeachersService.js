import { getPagination, getPagingData } from "../../config/pagination.js";
import Teacher from "../../models/Teacher.js";

class ListAllTeachersService {
  async execute(page, size) {
    const { limit, offset } = getPagination(page, size);

    const teachers = await Teacher.findAndCountAll({ limit, offset });

    const paginatedTeachers = getPagingData(teachers, page, limit);

    return paginatedTeachers;
  }
}

export default new ListAllTeachersService();
