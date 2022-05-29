import { config } from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Menu } from "../Entities/Menu";
import { Order } from "../Entities/Order";
import {OrderLine} from "../Entities/OrderLine"
import {Category} from "../Entities/Category"


config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: +process.env.DB_PORT!,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.NAME,
  synchronize: true,
  logging: false,
  entities: [Menu, Order, OrderLine,Category],
  migrations: ["migration/*.ts"],
  subscribers: [],
  useUTC:true
});
