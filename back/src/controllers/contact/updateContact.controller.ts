import { Request, Response } from "express";
import { updateContactService } from "../../services/contact/updateContact.service";

export const updateContactController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const updateContact = await updateContactService(req.body, id);
    return res.json(updateContact);
};
