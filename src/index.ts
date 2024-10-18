import { IndexRoutes, IndexServer } from "./presentation";
import { AppDataSource } from "./infrastructure";

(() => {
  startServer();
})();

async function startServer() {
  try {
    await AppDataSource.initialize();

    const port = parseFloat(process.env.PORT as string);
    const routes = IndexRoutes.routes;

    new IndexServer({ port, routes }).start();
  } catch (e) {
    console.log(e);
  }
}
