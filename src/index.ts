import express from "express";
import { config } from "dotenv";
import { Request, Response, json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { AppDataSource } from "./Routes/data-source";
import  MenuRouter from "./Routes/MenuRouter";
import  OrderRouter from "./Routes/OrderRouter";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));


app.get("/", async function (req: Request, res: Response) {
  return res.json("Hello World");
});

app.use("/menu", MenuRouter);
app.use("/order", OrderRouter);

app.listen(process.env.PORT || 4545, async () => {
  console.log(`running on port ${process.env.PORT}`);
  await AppDataSource.initialize();
  console.log("Connected to DB");
});