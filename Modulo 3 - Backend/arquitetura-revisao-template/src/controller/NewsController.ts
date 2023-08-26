import { Request, Response } from "express";
import { NewsBusiness } from "../business/NewsBusiness";
import { News } from "../models/News";
import { CreateNewsSchema } from "../dtos/createNews.dto";
import { UpdateNewsSchema } from "../dtos/updateNews.dto";
import { DeleteNewsSchema } from "../dtos/deleteNews.dto";

export class NewsController {
  constructor(private newsBusiness: NewsBusiness) {}

  public getNews = async (req: Request, res: Response): Promise<void> => {
    try {
      const result: News[] = await this.newsBusiness.getAllNews();

      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public createNews = async (req: Request, res: Response) => {
    try {
      const input = CreateNewsSchema.parse({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
      });

      await this.newsBusiness.createNews(input);

      res.status(201).send("Notícia criada com sucesso!");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public updateNews = async (req: Request, res: Response) => {
    try {
      const input = UpdateNewsSchema.parse({
        id: req.params.id,
        title: req.body.title,
        description: req.body.description,
      });

      await this.newsBusiness.editNews(input);

      res.status(201).send("Notícia atualizada com sucesso!");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public deleteNews = async (req: Request, res: Response) => {
    try {
      const input = DeleteNewsSchema.parse({
        id: req.params.id,
      });

      await this.newsBusiness.deleteNews(input);

      res.status(201).send("Notícia deletada com sucesso!");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
