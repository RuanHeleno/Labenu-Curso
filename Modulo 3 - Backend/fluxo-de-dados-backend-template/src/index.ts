import express, { Request, Response } from "express";
import cors from "cors";
import { accounts } from "./database";
import { ACCOUNT_TYPE } from "./types";

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

app.get("/accounts/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (id.charAt(0) !== "a") {
      res.statusCode = 400;
      throw new Error("ID inválido! Deve começar com a letra 'a'.");
    }

    const result = accounts.find((account) => account.id === id);

    if (!result) {
      res.statusCode = 401;
      throw new Error("Conta não encontrada! Verifique o 'id'.");
    }

    res.status(200).send(result);
  } catch (error) {
    if (error instanceof Error) res.send(error.message);
    else res.send("Erro na instância da classe!");
  }
});

app.delete("/accounts/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (id.charAt(0) !== "a") {
      res.statusCode = 400;
      throw new Error("ID inválido! Deve começar com a letra 'a'.");
    }

    const accountIndex = accounts.findIndex((account) => account.id === id);

    if (accountIndex < 0) {
      res.statusCode = 401;
      throw new Error("Conta não encontrada! Verifique o 'id'.");
    }

    accounts.splice(accountIndex, 1);

    res.status(200).send("Item deletado com sucesso");
  } catch (error) {
    if (error instanceof Error) res.send(error.message);
    else res.send("Erro na instância da classe!");
  }
});

app.put("/accounts/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (id.charAt(0) !== "a") {
      res.statusCode = 400;
      throw new Error("ID inválido! Deve começar com a letra 'a'.");
    }

    const newId = req.body.id as string | undefined;
    const newOwnerName = req.body.ownerName as string | undefined;
    const newBalance = req.body.balance;
    const newType = req.body.type as ACCOUNT_TYPE | undefined;

    if (newId !== undefined) {
      if (newId.charAt(0) !== "a") {
        res.statusCode = 400;
        throw new Error("Novo ID inválido! Deve começar com a letra 'a'.");
      }
    }

    if (newOwnerName !== undefined) {
      if (newOwnerName.length < 2) {
        res.statusCode = 400;
        throw new Error(
          "Novo nome inválido! Deve conter pelo menos dois caracteres."
        );
      }
    }

    if (newBalance !== undefined) {
      if (typeof newBalance !== "number") {
        res.statusCode = 422;
        throw new Error("O valor do 'balance' deve ser numérico.");
      }

      if (newBalance < 0) {
        res.statusCode = 400;
        throw new Error("O valor do 'balance' precisa ser maior que zero.");
      }
    }

    if (newType !== undefined) {
      if (
        newType !== ACCOUNT_TYPE.BLACK &&
        newType !== ACCOUNT_TYPE.GOLD &&
        newType !== ACCOUNT_TYPE.PLATINUM
      ) {
        res.statusCode = 400;
        throw new Error(
          "O 'type' precisa ser um dos seguintes valores: \nBlack \nGold \nPlatinum."
        );
      }
    }

    const account = accounts.find((account) => account.id === id);

    if (account) {
      account.id = newId || account.id;
      account.ownerName = newOwnerName || account.ownerName;
      account.type = newType || account.type;
      account.balance = newBalance || account.balance;
    }

    res.status(200).send("Atualização realizada com sucesso");
    console.table(account);
  } catch (error) {
    if (error instanceof Error) res.send(error.message);
    else res.send("Erro na instância da classe!");
  }
});
