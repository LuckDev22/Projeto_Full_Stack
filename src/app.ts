import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import { clientRoutes } from "./routes/client.routes";
import { handleErrors } from "./error";


export const app: Application = express();
app.use(json());

app.use("/client", clientRoutes)
app.use(handleErrors);