import { Router } from "express";
import { UserRoutes } from "./user.routes";
import { ProviderRoutes } from "./provider.routes";
export class IndexRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/user", UserRoutes.routes);
    router.use("/provider", ProviderRoutes.routes);

    return router;
  }
}