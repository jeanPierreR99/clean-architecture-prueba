import "dotenv/config";
import express, { Router } from "express";

interface Options {
  port: number;
  routes: Router;
}
export class Server {
  private readonly port: number;
  private readonly routes: Router;
  public readonly app = express();

  constructor(options: Options) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    this.app.use(this.routes);

    this.app.listen(this.port, () => {
      console.log(`SERVER LISTEN PORT ${this.port}`);
    });
  }
}
