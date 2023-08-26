import express, { Request, Response } from "express";
import cors from "cors";
import { CarsController } from "./controller/CarsController";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

const carsController = new CarsController;

app.get("/ping", carsController.ping);

app.get("/cars", carsController.getAllCars);

app.get("/cars/:id", carsController.getCarById);

app.post("/cars", carsController.createCar);

app.put("/cars/:id", carsController.editCar);

app.delete("/cars/:id", carsController.deleteCar);