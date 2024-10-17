import { Server } from "./app/server";
import { Routes } from "./app/routes";
import { AppDataSource } from "./infrastructure/dataBase/db";

(() => {
  startServer();
})();

async function startServer() {
  try {
    await AppDataSource.initialize();

    const port = parseFloat(process.env.PORT as string);
    const routes = Routes.routes;

    new Server({ port, routes }).start();
  } catch (e) {
    console.log(e);
  }
}
