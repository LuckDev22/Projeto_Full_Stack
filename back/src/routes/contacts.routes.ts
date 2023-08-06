import { Router } from "express";
import { createContactController } from "../controllers/contact/createContact.controller";
import { deleteContactController } from "../controllers/contact/deleteContact.controller";
import { listContactController } from "../controllers/contact/listContact.controller";
import { updateContactController } from "../controllers/contact/updateContact.controller";
import { contactSchemaRequest } from "../schemas/contact.schemas";
import { checkedBodyIsValidMiddleware } from "../middlewares/checkedBodyIsValid.middleware";
import { checkedExistingContactMiddleware } from "../middlewares/checkedExistingContact.middleware";

export const contactRoutes = Router();

contactRoutes.post(
    "",
    checkedBodyIsValidMiddleware(contactSchemaRequest),
    checkedExistingContactMiddleware,
    createContactController
);
contactRoutes.get("", listContactController);
contactRoutes.patch("/:id", updateContactController);
contactRoutes.delete("/:id", deleteContactController);
