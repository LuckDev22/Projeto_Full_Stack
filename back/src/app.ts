import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import { handleErrors } from "./error";
import { clientRoutes } from "./routes/clients.routes";
import { loginRoutes } from "./routes/login.routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import { contactRoutes } from "./routes/contacts.routes";

export const app: Application = express();

const Origins = [
    "http://localhost:5173",
    "https://full-stack-project-hgrizz4wa-luckdev22.vercel.app",
    "https://full-stack-project-swart.vercel.app",
];

app.use(json());
app.use(
    cors({
        origin: Origins,
    })
);
app.use("/client", clientRoutes);
app.use("/login", loginRoutes);
app.use("/contact", contactRoutes);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(handleErrors);
