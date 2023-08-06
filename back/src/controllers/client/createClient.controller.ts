import { Request, Response } from "express";
import { createClientService } from "../../services/clients/createClient.service";
import { clientSchemaResponse } from "../../schemas/client.schemas";

export const createClientController = async (
    req: Request,
    resp: Response
): Promise<Response> => {
    const clientData = req.body;
    const newClient = await createClientService(clientData);
    const clientResp = clientSchemaResponse.parse(newClient);
    return resp.status(201).json(clientResp);
};
