import express, { Request, Response } from "express";
import cors from "cors";
import { accounts, pets } from "./database";
import { ACCOUNT_TYPE, TAccount, TPet } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

app.get("/accounts", (req: Request, res: Response) => {
  res.send(accounts);
});

//Get Product By Id
app.get("/accounts/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const result: TAccount = accounts.find((account) => account.id === id);

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(301).send("Account not found");
  }
});

//Delete Product By Id
app.delete("/accounts/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const accountIndex: number = accounts.findIndex(
    (account) => account.id === id
  );

  if (accountIndex >= 0) {
    accounts.splice(accountIndex, 1);
  }

  res.status(200).send("Item deletado com sucesso");
});

//Edit Product By Id
app.put("/accounts/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const newId = req.body.id as string | undefined;
  const newName = req.body.ownerName as string | undefined;
  const newBalance = req.body.balance as number | undefined;
  const newType = req.body.type as ACCOUNT_TYPE | undefined;

  if (
    newType &&
    newType !== ACCOUNT_TYPE.BRONZE &&
    newType !== ACCOUNT_TYPE.SILVER &&
    newType !== ACCOUNT_TYPE.GOLD &&
    newType !== ACCOUNT_TYPE.PLATINUM &&
    newType !== ACCOUNT_TYPE.BLACK
  ) {
    res.status(400).send("Invalid value of type");
  }

  const account: TAccount = accounts.find((account) => account.id === id);

  if (account) {
    account.id = newId || account.id;
    account.ownerName = newName || account.ownerName;
    account.balance = newBalance || account.balance;
    account.type = newType || account.type;
  }

  res.status(200).send("Atualização realizada com sucesso");
  console.table(accounts);
});

//EXERCÍCIO DE FIXAÇÃO

//Get all Pets
app.get("/pets", (req: Request, res: Response) => {
  res.send(pets);
});

//Create new Pet
app.post("/pets", (req: Request, res: Response) => {
  const {
    id,
    name,
    type,
    age,
    color,
  }: { id: string; name: string; type: string; age: number; color: string } =
    req.body;

  const newPet: TPet = {
    id,
    name,
    type,
    age,
    color,
  };

  pets.push(newPet);

  res.status(201).send("Animal registrado com sucesso!");
  console.log(pets);
});

//Edit Product By Id
app.put("/pets/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const newId = req.body.id as string | undefined;
  const newName = req.body.name as string | undefined;
  const newType = req.body.type as ACCOUNT_TYPE | undefined;
  const newAge = req.body.age as number | undefined;
  const newColor = req.body.color as string | undefined;

  const pet: TPet = pets.find((item) => item.id === id);

  if (pet) {
    pet.id = newId || pet.id;
    pet.name = newName || pet.name;
    pet.type = newType || pet.type;
    pet.age = newAge || pet.age;
    pet.color = newColor || pet.color;
  }

  res.status(200).send("Atualização realizada com sucesso");
  console.log(pets);
});

//Delete Pet By Id
app.delete("/pets/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const petIndex: number = pets.findIndex((pet) => pet.id === id);

  if (petIndex >= 0) {
    pets.splice(petIndex, 1);
  }

  res.status(200).send("Item deletado com sucesso");
  console.log(pets);
});
