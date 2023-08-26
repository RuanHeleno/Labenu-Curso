import { knex } from "knex";
import { AccountDB, UserDB } from "../types";

export abstract class BaseDatabase {
  protected static connection = knex({
    client: "sqlite3",
    connection: {
      filename: "./src/database/poo.db",
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

  protected async findAll(): Promise<UserDB[] | AccountDB[]> {
    return await BaseDatabase.connection(this.TABLE_NAME);
  }

  protected async findByID(
    id: string
  ): Promise<UserDB[] | AccountDB[] | undefined[]> {
    return await BaseDatabase.connection(this.TABLE_NAME).where({ id });
  }

  protected async insert(newItem: UserDB | AccountDB): Promise<void> {
    return await BaseDatabase.connection(this.TABLE_NAME).insert(newItem);
  }
}
