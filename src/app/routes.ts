import { Router } from "express";
import { UserRoute } from "./routes/user.route";

export class Routes {
  static get routes(): Router {
    const router = Router();

    router.use("/user", UserRoute.routes);
    router.use("/provider", (req, res) => {
      res.json({ msg: "provider" });
    });
    router.use("/vehicle", (req, res) => {
      res.json({ msg: "vehicle" });
    });

    return router;
  }
}
