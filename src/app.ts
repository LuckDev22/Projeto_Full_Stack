import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import { handleErrors } from "./error";
import { clientRoutes } from "./routes/client.routes";
import { loginRoutes } from "./routes/login.routes";


export const app: Application = express();
app.use(json());

app.use("/client", clientRoutes)
app.use("/login", loginRoutes)
app.use(handleErrors);