import { Router } from "express";
import { createClientController } from "../controllers/client/createClient.controller";
import { checkedIdExisting } from "../middlewares/checkedIdExisting.middleware";
import { deleteClientController } from "../controllers/client/deleteClient.controller";
import { listClientController } from "../controllers/client/listClient.controller";
import { updateClientsController } from "../controllers/client/updateClient.controller";

export const clientRoutes: Router = Router();

clientRoutes.post("", createClientController);
clientRoutes.get("", listClientController);
clientRoutes.patch("/:id", updateClientsController);
clientRoutes.delete("/:id", checkedIdExisting, deleteClientController);
