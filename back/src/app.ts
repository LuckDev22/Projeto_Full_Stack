import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import { handleErrors } from "./error";
import { clientRoutes } from "./routes/clients.routes";
import { loginRoutes } from "./routes/login.routes";
import cors from "cors";

export const app: Application = express();
app.use(json());
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use("/client", clientRoutes);
app.use("/login", loginRoutes);
app.use(handleErrors);
