import { Router } from "express";
import { createClientController } from "../controllers/client/createClient.controller";
import { checkedIdExisting } from "../middlewares/checkedIdExisting.middleware";
import { deleteClientController } from "../controllers/client/deleteClient.controller";
import { listClientController } from "../controllers/client/listClient.controller";

export const clientRoutes: Router = Router();

clientRoutes.post("", createClientController);
clientRoutes.get("", listClientController);
// clientRoutes.patch("/:id", updateClientController);
clientRoutes.delete("/:id", checkedIdExisting, deleteClientController);