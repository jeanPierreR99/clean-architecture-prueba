import { Router } from "express";
import { AppDataSource } from "../../infrastructure/dataBase/db";
import { UserRepository } from "../../infrastructure/repository/user.repository";
import { UserCases } from "../../use-cases/user.cases";
import { UserController } from "../controllers/user.controller";
import { User } from "../../domain/entities/user.entity";

export class UserRoute {
  static get routes(): Router {
    const router = Router();
    const userRepository = new UserRepository(
      AppDataSource.getRepository(User)
    );
    const userCases = new UserCases(userRepository);
    const userController = new UserController(userCases);

    router.get("/", (req, res) => userController.get(req, res));
    router.post("/", (req, res) => userController.save(req, res));
    router.put("/", (req, res) => userController.update(req, res));
    router.get("/:id", (req, res) => userController.getById(req, res));
    router.delete("/:id", (req, res) => userController.delete(req, res));

    return router;
  }
}
