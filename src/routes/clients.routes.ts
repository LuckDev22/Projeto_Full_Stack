import { Router } from "express";
import { createClientController } from "../controllers/client/createClient.controller";
import { checkedIdExisting } from "../middlewares/checkedIdExisting.middleware";
import { destroyClientController } from "../controllers/client/destroyClient.controller";

export const clientRoutes: Router = Router();

clientRoutes.post("", createClientController);

clientRoutes.delete("/:id", checkedIdExisting, destroyClientController);
