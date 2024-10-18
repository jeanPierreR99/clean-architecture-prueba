import { Router } from "express";
import { User } from "../../domain";
import { AppDataSource, UserRepository } from "../../infrastructure";
import { UserController } from "../controllers/user.controller";
import { UserCases } from "../../application";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new UserRepository(AppDataSource.getRepository(User));
    const cases = new UserCases(repository);
    const controller = new UserController(cases);

    router.get("/", (req, res) => controller.get(req, res));
    router.post("/", (req, res) => controller.save(req, res));
    router.put("/", (req, res) => controller.update(req, res));
    router.get("/:id", (req, res) => controller.getById(req, res));
    router.delete("/:id", (req, res) => controller.delete(req, res));

    return router;
  }
}
