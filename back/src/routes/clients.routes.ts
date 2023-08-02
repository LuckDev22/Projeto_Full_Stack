import { Router } from "express";
import { createClientController } from "../controllers/client/createClient.controller";
import { checkedIdExisting } from "../middlewares/checkedIdExisting.middleware";
import { deleteClientController } from "../controllers/client/deleteClient.controller";
import { listClientController } from "../controllers/client/listClient.controller";
import { updateClientsController } from "../controllers/client/updateClient.controller";
import { checkedBodyIsValidMiddleware } from "../middlewares/checkedBodyIsValid.middleware";
import {
    clientSchemaRequest,
    clientSchemaUpdate,
} from "../schemas/client.schemas";
import { checkedEmailExistingMiddleware } from "../middlewares/checkedEmailExisting.middleware";

export const clientRoutes: Router = Router();

clientRoutes.post(
    "",
    checkedBodyIsValidMiddleware(clientSchemaRequest),
    checkedEmailExistingMiddleware,
    createClientController
);
clientRoutes.get("", listClientController);

clientRoutes.patch(
    "/:id",
    checkedBodyIsValidMiddleware(clientSchemaUpdate),
    checkedIdExisting,
    updateClientsController
);

clientRoutes.delete("/:id", checkedIdExisting, deleteClientController);
