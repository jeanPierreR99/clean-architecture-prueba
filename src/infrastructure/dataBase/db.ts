import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "../../domain/entities/User";
import { Vehicle } from "../../domain/entities/Vehicle";
import { Quotation } from "../../domain/entities/Quotation";
import { Provider } from "../../domain/entities/Provider";
import { Price } from "../../domain/entities/Price";
import { Place } from "../../domain/entities/Place";
import { Coverage } from "../../domain/entities/Coverage";
import { Category } from "../../domain/entities/Category";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: parseFloat(process.env.DATABASE_PORT as string),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [
    User,
    Vehicle,
    Quotation,
    Provider,
    Price,
    Place,
    Coverage,
    Category,
  ],
  synchronize: true,
});
