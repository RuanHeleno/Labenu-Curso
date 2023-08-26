import { Courses } from "../models/Courses";
import { TCourseDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class CoursesDatabase extends BaseDatabase {
  TABLE_NAME = "courses";

  async findAllCourses(q: string | undefined): Promise<any[]> {
    if (q) {
      const result: TCourseDB[] = await BaseDatabase.connection("courses").where(
        "name",
        "LIKE",
        `%${q}%`
      );
      return result;
    } else {
      const result = await super.findAll();
      
      return result;
    }
  }

  async findCourseByID(id: string): Promise<any | undefined> {
    const [result] = await super.findByID(id);

    return result;
  }

  async createCourse(course: Courses): Promise<void> {
    await super.insert(course);
  }

  async EditCourse(course: Courses): Promise<void> {
    await super.update(course);
  }

  async DeleteCourse(course: Courses): Promise<void> {
    await super.delete(course);
  }
}
