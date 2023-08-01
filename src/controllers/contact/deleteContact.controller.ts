import { Request, Response } from "express";
import { deleteContactService } from "../../services/contact/deleteContact.service";



export const deleteContactController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const contactId: number = Number(req.params.id);

    await deleteContactService(contactId);
    return res.status(204).send();
};
