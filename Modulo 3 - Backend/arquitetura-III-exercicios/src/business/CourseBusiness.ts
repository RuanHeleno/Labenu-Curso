import { CoursesDatabase } from "../database/CoursesDatabase";
import { Courses } from "../models/Courses";
import { TCourseDB } from "../types";

export class CourseBusiness {
  constructor(private courseDatabase: CoursesDatabase) {}

  public async getCourses(q: string | undefined): Promise<Courses[]> {
    const courses = await this.courseDatabase.findAllCourses(q);

    const result: Courses[] = courses.map(
      (course) => new Courses(course.id, course.name, course.lessons)
    );

    return result;
  }

  public async GetCourseById(id: string): Promise<Courses> {
    const course: TCourseDB | undefined =
      await this.courseDatabase.findCourseByID(id);

    if (!course) {
      throw new Error("Curso não encontrado");
    }

    const result: Courses = new Courses(course.id, course.name, course.lessons);

    return result;
  }

  public async CreateCourse(input: any): Promise<Courses> {
    const { id, name, lessons } = input;

    const courseDBExists: CoursesDatabase | undefined =
      await this.courseDatabase.findCourseByID(id);

    if (courseDBExists) {
      throw new Error("'id' já existe");
    }

    const newCourse: Courses = new Courses(id, name, lessons);

    await this.courseDatabase.createCourse(newCourse);

    return newCourse;
  }

  public async EditCourse(input: any): Promise<Courses> {
    const { id, name, lessons } = input;

    const courseDBExists: TCourseDB | undefined =
      await this.courseDatabase.findCourseByID(id);

    if (!courseDBExists) {
      throw new Error("'id' não encontrado");
    }

    if (name) {
      if (typeof name !== "string") {
        throw new Error("'name' deve ser string");
      }
    }

    if (lessons) {
      if (typeof lessons !== "number") {
        throw new Error("'lessons' deve ser number");
      }
    }

    const course: Courses = new Courses(
      courseDBExists.id,
      name || courseDBExists.name,
      lessons || courseDBExists.lessons
    );

    if (name) course.setName(name);
    if (lessons) course.setLessons(lessons);

    await this.courseDatabase.EditCourse(course);

    return course;
  }

  public async DeleteCourse(id: string): Promise<string> {
    const courseDBExists: TCourseDB | undefined =
      await this.courseDatabase.findCourseByID(id);

    if (!courseDBExists) {
      throw new Error("'id' não encontrado");
    }

    const car: Courses = new Courses(
      courseDBExists.id,
      courseDBExists.name,
      courseDBExists.lessons
    );

    await this.courseDatabase.DeleteCourse(car);

    return "Curso deletado com sucesso!";
  }
}
