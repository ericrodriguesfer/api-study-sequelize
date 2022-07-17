import { getPagination, getPagingData } from "../../config/pagination.js";
import Course from "../../models/Course.js";

class ListAllCoursesService {
  async execute(page, size) {
    const { limit, offset } = getPagination(page, size);

    const courses = await Course.findAndCountAll({ limit, offset });

    const paginatedCoursers = getPagingData(courses, page, limit);

    return paginatedCoursers;
  }
}

export default new ListAllCoursesService();
