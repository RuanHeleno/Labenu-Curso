import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router(); // criação do router de users

const userController = new UserController();

userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.createUser);