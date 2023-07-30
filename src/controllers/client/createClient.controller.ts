import { Request, Response } from "express";
import { createClientService } from "../../services/clients/createClient.service";

export const createClientController = async (req: Request, resp: Response): Promise<Response> => {
    const clientData = req.body
    const newClient = await createClientService(clientData)
    return resp.status(201).json(newClient)
} 