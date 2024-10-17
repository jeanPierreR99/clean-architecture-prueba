import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "../../domain/entities/user.entity";
import { Vehicle } from "../../domain/entities/vehicle.entity";
import { Quotation } from "../../domain/entities/quotation.entity";
import { Provider } from "../../domain/entities/provider.entity";
import { Price } from "../../domain/entities/price.entity";
import { Place } from "../../domain/entities/place.entity";
import { Coverage } from "../../domain/entities/coverage.entity";
import { Category } from "../../domain/entities/category.entity";

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
