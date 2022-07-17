import { getPagination, getPagingData } from "../../config/pagination.js";
import Course from "../../models/Course.js";

class ListAllCoursesWithTeacherService {
  async execute(page, size) {
    const { limit, offset } = getPagination(page, size);

    const courses = await Course.findAndCountAll({
      include: { association: "teachers" },
      limit,
      offset,
    });

    const paginatedCoursers = getPagingData(courses, page, limit);

    return paginatedCoursers;
  }
}

export default new ListAllCoursesWithTeacherService();
