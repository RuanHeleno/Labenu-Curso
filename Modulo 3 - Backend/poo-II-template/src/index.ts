import express, { Request, Response } from "express";
import cors from "cors";
import { TAccountDB, TAccountDBPost, TUserDB, TUserDBPost } from "./types";
import { User } from "./models/User";
import { Account } from "./models/Account";
import { UserDatabase } from "./database/UserDatabase";
import { AccountDatabase } from "./database/AccountDatabase";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

app.get("/ping", async (req: Request, res: Response) => {
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
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const q = req.query.q as string;

    const userDB = new UserDatabase();

    const users: TUserDB[] = await userDB.findUsers(q);

    const result: User[] = users.map(
      (user) =>
        new User(user.id, user.name, user.email, user.password, user.created_at)
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
});

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const userDB = new UserDatabase();
    const user: TUserDB | undefined = await userDB.findUserByID(id);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const result: User = new User(
      user.id,
      user.name,
      user.email,
      user.password,
      user.created_at
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
});

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { id, name, email, password } = req.body;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser string");
    }

    if (typeof name !== "string") {
      res.status(400);
      throw new Error("'name' deve ser string");
    }

    if (typeof email !== "string") {
      res.status(400);
      throw new Error("'email' deve ser string");
    }

    if (typeof password !== "string") {
      res.status(400);
      throw new Error("'password' deve ser string");
    }

    const userDB = new UserDatabase();
    const userDBExists: TUserDBPost | undefined = await userDB.findUserByID(id);

    if (userDBExists) {
      res.status(400);
      throw new Error("'id' já existe");
    }

    const newUser = new User(
      id,
      name,
      email,
      password,
      new Date().toISOString()
    ); // yyyy-mm-ddThh:mm:sssZ

    await userDB.createUser(newUser);

    res.status(201).send(newUser);
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
});

app.get("/accounts", async (req: Request, res: Response) => {
  try {
    const accountsDB = new AccountDatabase();

    const accounts: TAccountDB[] = await accountsDB.findAllAccounts();

    const result: Account[] = accounts.map(
      (account) =>
        new Account(
          account.id,
          account.balance,
          account.owner_id,
          account.created_at
        )
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
});

app.get("/accounts/:id/balance", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const accountDB = new AccountDatabase();
    const account = await accountDB.findAccountByID(id);

    if (!account) {
      throw new Error("Conta não encontrada");
    }

    const result: Account = new Account(
      account.id,
      account.balance,
      account.owner_id,
      account.created_at
    );

    const balance = result.getBalance();

    res.status(200).send({ balance: balance });
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
});

app.post("/accounts", async (req: Request, res: Response) => {
  try {
    const { id, ownerId } = req.body;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser string");
    }

    if (typeof ownerId !== "string") {
      res.status(400);
      throw new Error("'ownerId' deve ser string");
    }

    const accountDB = new AccountDatabase();
    const accountDBExists: TAccountDBPost | undefined =
      await accountDB.findAccountByID(id);

    if (accountDBExists) {
      res.status(400);
      throw new Error("'id' já existe");
    }

    const userDB = new UserDatabase();
    const userDBExists: TUserDBPost | undefined = await userDB.findUserByID(ownerId);

    if (!userDBExists) {
      res.status(400);
      throw new Error("Usuário não encontrado");
    }

    const newAccount = new Account(id, 0, ownerId, new Date().toISOString()); // yyyy-mm-ddThh:mm:sssZ

    await accountDB.createAccount(newAccount);

    res.status(201).send(newAccount);
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
});

app.put("/accounts/:id/balance", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const value = req.body.value;

    if (typeof value !== "number") {
      res.status(400);
      throw new Error("'value' deve ser number");
    }

    const accountDB = new AccountDatabase();
    const accountDBExists: TAccountDB | undefined =
      await accountDB.findAccountByID(id);

    if (!accountDBExists) {
      res.status(400);
      throw new Error("Conta não encontrada!");
    }

    const account = new Account(
        accountDBExists.id,
        accountDBExists.balance,
        accountDBExists.owner_id,
        accountDBExists.created_at
      );

    const newBalance = account.getBalance() + value;
    account.setBalance(newBalance);

    await accountDB.EditAccount(account);

    res.status(201).send(account);
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
});