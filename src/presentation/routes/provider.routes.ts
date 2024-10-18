import { Router } from "express";
import { AppDataSource, ProviderRepository } from "../../infrastructure";
import { Provider } from "../../domain";
import { ProviderController } from "../controllers/provider.controller";
import { ProviderCases } from "../../application";

export class ProviderRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new ProviderRepository(
      AppDataSource.getRepository(Provider)
    );
    const cases = new ProviderCases(repository);
    const controller = new ProviderController(cases);

    router.get("/", (req, res) => controller.get(req, res));
    router.post("/", (req, res) => controller.save(req, res));

    return router;
  }
}
