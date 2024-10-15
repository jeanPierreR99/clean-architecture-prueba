import { Router } from "express";
import { UserRoute } from "./routes/UserRoute";

export class Routes {
  
  static get routes(): Router {
    const router = Router();

    router.use("/user", UserRoute.routes);

    return router;
  }
}
