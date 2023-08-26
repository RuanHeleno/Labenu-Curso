import { Cars } from "../models/Cars";
import { TCarDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class CarsDatabase extends BaseDatabase {
  TABLE_NAME = "cars";

  async findAllCars(q: string | undefined): Promise<any[]> {
    if (q) {
      const result: TCarDB[] = await BaseDatabase.connection("cars").where(
        "modelo",
        "LIKE",
        `%${q}%`
      );
      return result;
    } else {
      const result = await super.findAll();
      
      return result;
    }
  }

  async findCarByID(id: string): Promise<any | undefined> {
    const [result] = await super.findByID(id);

    return result;
  }

  async createCar(car: Cars): Promise<void> {
    await super.insert(car);
  }

  async EditCar(car: Cars): Promise<void> {
    await super.update(car);
  }

  async DeleteCar(car: Cars): Promise<void> {
    await super.delete(car);
  }
}
