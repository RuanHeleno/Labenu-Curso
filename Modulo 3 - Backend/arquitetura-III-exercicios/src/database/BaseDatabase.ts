import { knex } from "knex";
import { CoursesDatabase } from "./CoursesDatabase";
import { Courses } from "../models/Courses";

export abstract class BaseDatabase {
  protected static connection = knex({
    client: "sqlite3",
    connection: {
      filename: "./src/database/arquitetura-II-exercicios.db",
    },
    useNullAsDefault: true,
    pool: {
      min: 0,
      max: 1,
      afterCreate: (conn: any, cb: any) => {
        conn.run("PRAGMA foreign_keys = ON", cb);
      },
    },
  });

  abstract TABLE_NAME: string;

  protected async findAll(): Promise<CoursesDatabase[]> {
    return await BaseDatabase.connection(this.TABLE_NAME);
  }

  protected async findByID(id: string): Promise<CoursesDatabase[] | undefined[]> {
    return await BaseDatabase.connection(this.TABLE_NAME).where({ id });
  }

  protected async insert(newItem: Courses): Promise<void> {
    return await BaseDatabase.connection(this.TABLE_NAME).insert(newItem);
  }

  protected async update(newItem: Courses): Promise<any> {
    return await BaseDatabase.connection(this.TABLE_NAME)
      .update({
        name: newItem.getName(),
        lessons: newItem.getLessons(),
      })
      .where({ id: newItem.getId() });
  }

  protected async delete(item: Courses): Promise<any> {
    return await BaseDatabase.connection(this.TABLE_NAME)
      .del()
      .where({ id: item.getId() });
  }
}
