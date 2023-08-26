import { knex } from "knex";
import { CarsDatabase } from "./CarsDatabase";
import { Cars } from "../models/Cars";

export abstract class BaseDatabase {
  protected static connection = knex({
    client: "sqlite3",
    connection: {
      filename: "./src/database/poo-exercicios-II.db",
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

  protected async findAll(): Promise<CarsDatabase[]> {
    return await BaseDatabase.connection(this.TABLE_NAME);
  }

  protected async findByID(id: string): Promise<CarsDatabase[] | undefined[]> {
    return await BaseDatabase.connection(this.TABLE_NAME).where({ id });
  }

  protected async insert(newItem: Cars): Promise<void> {
    return await BaseDatabase.connection(this.TABLE_NAME).insert(newItem);
  }

  protected async update(newItem: Cars): Promise<any> {
    return await BaseDatabase.connection(this.TABLE_NAME)
      .update({
        marca: newItem.getMarca(),
        modelo: newItem.getModelo(),
        ano: newItem.getAno(),
        valor: newItem.getValor(),
      })
      .where({ id: newItem.getId() });
  }

  protected async delete(item: Cars): Promise<any> {
    return await BaseDatabase.connection(this.TABLE_NAME)
      .del()
      .where({ id: item.getId() });
  }
}
