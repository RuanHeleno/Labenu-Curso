import { Request, Response } from "express";

import { AccountBusiness } from "../business/AccountBusiness";

export class AccountController {
  public getAccounts = async (req: Request, res: Response) => {
    try {
      const accountBusiness = new AccountBusiness();
      const result = await accountBusiness.getAccounts();

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
  };

  public getAccountBalance = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const accountBusiness = new AccountBusiness();
      const result = await accountBusiness.getAccountBalance(id);

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
  };

  public createAccount = async (req: Request, res: Response) => {
    try {
      const input: any = {
        id: req.body.id,
        ownerId: req.body.ownerId,
      };

      const accountBusiness = new AccountBusiness();
      const result = await accountBusiness.createAccount(input);

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
  };

  public editAccountBalance = async (req: Request, res: Response) => {
    try {
      const input: any = {
        id: req.params.id,
        value: req.body.value,
      };

      const accountBusiness = new AccountBusiness();
      const result = await accountBusiness.editAccount(input);

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
  };
}
