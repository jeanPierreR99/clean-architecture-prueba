import "dotenv/config";
import express from "express";
import { Routes } from "./app/Routes";
import { AppDataSource } from "./infrastructure/dataBase/db";

const app = express();

app.use(express.json());

app.use("/api", Routes.routes);

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    app.listen(process.env.PORT, () => {
      console.log(`SERVER LISTEN PORT ${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServer();
