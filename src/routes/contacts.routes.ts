import { Router } from "express";
import { createContactController } from "../controllers/contact/createContact.controller";
import { deleteContactController } from "../controllers/contact/deleteContact.controller";
import { listContactController } from "../controllers/contact/listContact.controller";
import { updateContactController } from "../controllers/contact/updateContact.controller";



export const contactRoutes = Router()

contactRoutes.post("", createContactController)



contactRoutes.get("", listContactController)
contactRoutes.patch("/:id",  updateContactController)
contactRoutes.delete("/:id", deleteContactController)

// ensureAuthMiddleware, ensureIsOwnerMiddleware,