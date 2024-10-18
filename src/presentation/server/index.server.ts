import "dotenv/config";
import express, { Router } from "express";

interface Options {
  port: number;
  routes: Router;
}
export class IndexServer {
  private readonly port: number;
  private readonly routes: Router;
  private readonly app = express();

  constructor(options: Options) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
    this.app.use(express.json());
  }

  async start() {
    this.app.use("/api", this.routes);

    this.app.listen(this.port, () => {
      console.log(`
        ███████╗██████╗ ██████╗ ███████╗██████╗ ██╗     ███████╗██████╗ 
        ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗
        █████╗  ██████╔╝██████╔╝█████╗  ██████╔╝██║     █████╗  ██████╔╝
        ██╔══╝  ██╔═══╝ ██╔═══╝ ██╔══╝  ██╔═══╝ ██║     ██╔══╝  ██╔═══╝ 
        ██║     ██║     ██║     ███████╗██║     ███████╗███████╗██║     
        ╚═╝     ╚═╝     ╚═╝     ╚══════╝╚═╝     ╚══════╝╚══════╝╚═╝     
                                                                          
                   SERVER LISTENING ON PORT: ${this.port}
        `);
    });
  }
}
