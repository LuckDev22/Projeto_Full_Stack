import { Router } from "express";
import { createClientController } from "../controllers/client/createClient.controller";

export const clientRoutes: Router = Router();

clientRoutes.post("", createClientController);
