import { Request, Response } from "express";
import { CarsDatabase } from "../database/CarsDatabase";
import { TCarDB } from "../types";
import { Cars } from "../models/Cars";
import { CarBusiness } from "../business/CarBusiness";

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
      const q = req.query.q as string | undefined;

      const carBusiness = new CarBusiness();
      const result = await carBusiness.getCars(q);

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

      const carBusiness = new CarBusiness();
      const result = await carBusiness.GetCarById(id);

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
      const input: any = {
        id: req.body.id,
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano,
        valor: req.body.valor
      };

      const carBusiness = new CarBusiness();
      const result = await carBusiness.CreateCar(input);

      res.status(201).send(result);
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
      const input: any = {
        id: req.params.id,
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano,
        valor: req.body.valor
      };
      
      const carBusiness = new CarBusiness();
      const result = await carBusiness.EditCar(input);

      res.status(201).send(result);
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

      const carBusiness = new CarBusiness();
      const result = await carBusiness.DeleteCar(id);

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
}
