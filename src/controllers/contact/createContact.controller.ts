import { Request, Response } from "express";

export const createContactController = async (req: Request, resp: Response): Promise<Response> => {
    const clientData = req.body
    const newClient = await createContactService(clientData)
    return resp.status(201).json(newClient)
} 