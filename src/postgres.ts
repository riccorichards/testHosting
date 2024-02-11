import { DataSource } from "typeorm";
import Test from "./test.entity";
import dotenv from "dotenv";
dotenv.config();

const appDataSource = new DataSource({
  type: "postgres",
  url: process.env.POSTGRES_URL,
  entities: [Test],
  synchronize: true,
  logging: false,
});

export default appDataSource;
