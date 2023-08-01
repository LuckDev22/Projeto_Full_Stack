import { Request, Response } from "express";
import { createContactService } from "../../services/contact/createContact.service";

export const createContactController = async (
    req: Request,
    resp: Response
): Promise<Response> => {
    const clientId = resp.locals.clientId;
    const newContact = await createContactService(req.body, clientId);
    
    return resp.status(201).json(newContact);
};
