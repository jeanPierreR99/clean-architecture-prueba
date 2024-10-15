import { Router } from "express";
import { UserController } from "../controllers/UserController";

export class UserRoute {
  static get routes(): Router {
    const router = Router();
    const userController = new UserController();

    router.get("/", (req, res) => userController.get(req, res));

    router.post("/", (req, res) => userController.save(req, res));

    router.delete("/", (req, res) => {
      console.log("route delete");
      res.json({ msg: "hola" });
    });

    router.put("/", (req, res) => {
      console.log("route put");
      res.json({ msg: "hola" });
    });

    router.get("/find", (req, res) => userController.getById(req, res));
    router.get("/pagination", (req, res) => userController.getUsersPages(req, res));

    return router;
  }
}
