import { Request, Response } from "express";

import { CourseBusiness } from "../business/CourseBusiness";
import { CreateCourseSchema } from "../dtos/createCourse.dto";
import { ZodError } from "zod";
import { BaseError } from "../errors/BaseError";

export class CoursesController {
  constructor(private courseBusiness: CourseBusiness) {}

  async ping(req: Request, res: Response): Promise<void> {
    try {
      res.status(200).send({ message: "Pong!" });
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }

  async getAllCourses(req: Request, res: Response): Promise<void> {
    try {
      const q = req.query.q as string | undefined;

      const result = await this.courseBusiness.getCourses(q);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }

  async getCourseById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;

      const result = await this.courseBusiness.GetCourseById(id);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }

  async createCourse(req: Request, res: Response): Promise<void> {
    try {
      const input = CreateCourseSchema.parse({
        id: req.body.id,
        name: req.body.name,
        lessons: req.body.lessons,
      });

      const result = await this.courseBusiness.CreateCourse(input);

      res.status(201).send(result);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }

  async editCourse(req: Request, res: Response): Promise<void> {
    try {
      const input: any = {
        id: req.params.id,
        name: req.body.name,
        lessons: req.body.lessons,
      };

      const result = await this.courseBusiness.EditCourse(input);

      res.status(201).send(result);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }

  async deleteCourse(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;

      const result = await this.courseBusiness.DeleteCourse(id);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }
}
