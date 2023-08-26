import { Request, Response } from "express";
import { Author } from "../models/Author";
import { AuthorBusiness } from "../business/AuthorBusiness";

export class AuthorController {
  constructor(private authorBusiness: AuthorBusiness) {}

  public getAuthors = async (req: Request, res: Response): Promise<void> => {
    try {
      const result: Author[] = await this.authorBusiness.getAllAuthors();

      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
