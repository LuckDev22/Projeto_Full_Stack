import { Request, Response } from "express";
import { listContactsService } from "../../services/contact/listContact.service";




export const listContactController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const clientId = res.locals.clientId
    const contacts = await listContactsService(clientId)

    return res.json(contacts);
};