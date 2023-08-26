import express from "express";
import { AuthorController } from "../controller/AuthorController";
import { AuthorBusiness } from "../business/AuthorBusiness";
import { AuthorDataBase } from "../database/AuthorsDatabase";

export const authorRouter = express.Router();

const authorController = new AuthorController(new AuthorBusiness(new AuthorDataBase()));

authorRouter.get("/", authorController.getAuthors);
