import { Request, Response } from "express";

import { CourseBusiness } from "../business/CourseBusiness";

export class CoursesController {
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

  async getAllCourses(req: Request, res: Response): Promise<void> {
    try {
      const q = req.query.q as string | undefined;

      const courseBusiness = new CourseBusiness();
      const result = await courseBusiness.getCourses(q);

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

  async getCourseById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;

      const courseBusiness = new CourseBusiness();
      const result = await courseBusiness.GetCourseById(id);

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

  async createCourse(req: Request, res: Response): Promise<void> {
    try {
      const input: any = {
        id: req.body.id,
        name: req.body.name,
        lessons: req.body.lessons,
      };

      const courseBusiness = new CourseBusiness();
      const result = await courseBusiness.CreateCourse(input);

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

  async editCourse(req: Request, res: Response): Promise<void> {
    try {
      const input: any = {
        id: req.params.id,
        name: req.body.name,
        lessons: req.body.lessons,
      };

      const courseBusiness = new CourseBusiness();
      const result = await courseBusiness.EditCourse(input);

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

  async deleteCourse(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;

      const courseBusiness = new CourseBusiness();
      const result = await courseBusiness.DeleteCourse(id);

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
