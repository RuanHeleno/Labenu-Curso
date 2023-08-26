import { Request, Response } from "express";
import { CarsDatabase } from "../database/CarsDatabase";
import { TCarDB } from "../types";
import { Cars } from "../models/Cars";

export class CarsController {
  async ping(req: Request, res: Response): Promise<void> {
    try {
      res.status(200).send({ message: "Pong!" });
    } catch (error) {
      console.log(error);

      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  }

  async getAllCars(req: Request, res: Response): Promise<void> {
    try {
      const q = req.query.q as string;

      const carsDB = new CarsDatabase();

      const cars = await carsDB.findAllCars(q);

      const result: Cars[] = cars.map(
        (car) => new Cars(car.id, car.modelo, car.marca, car.ano, car.valor)
      );

      res.status(200).send(result);
    } catch (error) {
      console.log(error);

      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  }

  async getCarById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;

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

      res.status(200).send(result);
    } catch (error) {
      console.log(error);

      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  }

  async createCar(req: Request, res: Response): Promise<void> {
    try {
      const { id, modelo, marca, ano, valor } = req.body;

      if (typeof id !== "string") {
        res.status(400);
        throw new Error("'id' deve ser string");
      }

      if (typeof modelo !== "string") {
        res.status(400);
        throw new Error("'modelo' deve ser string");
      }

      if (typeof marca !== "string") {
        res.status(400);
        throw new Error("'marca' deve ser string");
      }

      if (typeof ano !== "number") {
        res.status(400);
        throw new Error("'ano' deve ser number");
      }

      if (typeof valor !== "number") {
        res.status(400);
        throw new Error("'valor' deve ser number");
      }

      const carDB = new CarsDatabase();
      const carDBExists: CarsDatabase | undefined = await carDB.findCarByID(id);

      if (carDBExists) {
        res.status(400);
        throw new Error("'id' já existe");
      }

      const newCar : Cars = new Cars(id, modelo, marca, ano, valor);

      await carDB.createCar(newCar);

      res.status(201).send(newCar);
    } catch (error) {
      console.log(error);

      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  }

  async editCar(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const marca = req.body.marca;
      const modelo = req.body.modelo;
      const ano = req.body.ano;
      const valor = req.body.valor;

      const carDB = new CarsDatabase();
      const carDBExists: TCarDB | undefined = await carDB.findCarByID(id);

      if (!carDBExists) {
        res.status(404);
        throw new Error("'id' não encontrado");
      }

      if (marca) {
        if (typeof marca !== "string") {
          res.status(400);
          throw new Error("'marca' deve ser string");
        }
      }

      if (modelo) {
        if (typeof modelo !== "string") {
          res.status(400);
          throw new Error("'modelo' deve ser string");
        }
      }

      if (ano) {
        if (typeof ano !== "number") {
          res.status(400);
          throw new Error("'ano' deve ser number");
        }
      }

      if (valor) {
        if (typeof valor !== "number") {
          res.status(400);
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

      res.status(201).send(car);
    } catch (error) {
      console.log(error);

      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  }

  async deleteCar(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;

      const carDB = new CarsDatabase();
      const carDBExists: TCarDB | undefined = await carDB.findCarByID(id);

      if (!carDBExists) {
        res.status(404);
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

      res.status(200).send("Carro deletado com sucesso!");
    } catch (error) {
      console.log(error);

      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  }
}
