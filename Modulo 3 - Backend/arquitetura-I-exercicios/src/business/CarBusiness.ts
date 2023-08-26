import { CarsDatabase } from "../database/CarsDatabase";
import { Cars } from "../models/Cars";
import { TCarDB } from "../types";

export class CarBusiness {
  public async getCars(q: string | undefined): Promise<Cars[]> {
    const carsDB = new CarsDatabase();

    const cars = await carsDB.findAllCars(q);

    const result: Cars[] = cars.map(
      (car) => new Cars(car.id, car.modelo, car.marca, car.ano, car.valor)
    );

    return result;
  }

  public async GetCarById(id: string): Promise<Cars> {
    const carsDB = new CarsDatabase();
    const car: TCarDB | undefined = await carsDB.findCarByID(id);

    if (!car) {
      throw new Error("Carro não encontrado");
    }

    const result: Cars = new Cars(
      car.id,
      car.marca,
      car.modelo,
      car.ano,
      car.valor
    );

    return result;
  }

  public async CreateCar(input: any): Promise<Cars> {
    const { id, modelo, marca, ano, valor } = input;

    if (typeof id !== "string") {
      throw new Error("'id' deve ser string");
    }

    if (typeof modelo !== "string") {
      throw new Error("'modelo' deve ser string");
    }

    if (typeof marca !== "string") {
      throw new Error("'marca' deve ser string");
    }

    if (typeof ano !== "number") {
      throw new Error("'ano' deve ser number");
    }

    if (typeof valor !== "number") {
      throw new Error("'valor' deve ser number");
    }

    const carDB = new CarsDatabase();
    const carDBExists: CarsDatabase | undefined = await carDB.findCarByID(id);

    if (carDBExists) {
      throw new Error("'id' já existe");
    }

    const newCar: Cars = new Cars(id, modelo, marca, ano, valor);

    await carDB.createCar(newCar);

    return newCar;
  }

  public async EditCar(input: any): Promise<Cars> {
    const { id, modelo, marca, ano, valor } = input;

    const carDB = new CarsDatabase();
    const carDBExists: TCarDB | undefined = await carDB.findCarByID(id);

    if (!carDBExists) {
      throw new Error("'id' não encontrado");
    }

    if (marca) {
      if (typeof marca !== "string") {
        throw new Error("'marca' deve ser string");
      }
    }

    if (modelo) {
      if (typeof modelo !== "string") {
        throw new Error("'modelo' deve ser string");
      }
    }

    if (ano) {
      if (typeof ano !== "number") {
        throw new Error("'ano' deve ser number");
      }
    }

    if (valor) {
      if (typeof valor !== "number") {
        throw new Error("'valor' deve ser number");
      }
    }

    const car = new Cars(
      carDBExists.id,
      marca || carDBExists.marca,
      modelo || carDBExists.modelo,
      ano || carDBExists.ano,
      valor || carDBExists.valor
    );

    if (marca) car.setMarca(marca);
    if (modelo) car.setModelo(modelo);
    if (ano) car.setAno(ano);
    if (valor) car.setValor(valor);

    await carDB.EditCar(car);

    return car;
  }

  public async DeleteCar(id: string): Promise<string> {
    const carDB = new CarsDatabase();
      const carDBExists: TCarDB | undefined = await carDB.findCarByID(id);

      if (!carDBExists) {
        throw new Error("'id' não encontrado");
      }

      const car = new Cars(
        carDBExists.id,
        carDBExists.marca,
        carDBExists.modelo,
        carDBExists.ano,
        carDBExists.valor
      );

      await carDB.DeleteCar(car);

      return "Carro deletado com sucesso!"
  }
}
