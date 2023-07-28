import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import { clientRoutes } from "./routes/client.routes";


export const app: Application = express();
app.use(json());

app.use("/client", clientRoutes)