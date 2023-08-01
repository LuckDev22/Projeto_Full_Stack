import { Router } from "express";
import { createContactController } from "../controllers/contact/createContact.controller";


export const contactRoutes = Router()

contactRoutes.post("", createContactController)



// contactRoutes.get("", ensureAuthMiddleware, listTaskController)
// contactRoutes.patch("/:id", ensureAuthMiddleware, ensureIsOwnerMiddleware, ensureDataIsValid(taskSchemaUpdate), updateTaskController)
// contactRoutes.delete("/:id", ensureAuthMiddleware, ensureIsOwnerMiddleware, deleteTaskController)

