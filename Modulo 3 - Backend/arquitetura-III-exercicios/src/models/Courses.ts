export class Courses {
  constructor(
    private id: string,
    private name: string,
    private lessons: number
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getLessons(): number {
    return this.lessons;
  }

  public setLessons(lessons: number) {
    this.lessons = lessons;
  }
}
