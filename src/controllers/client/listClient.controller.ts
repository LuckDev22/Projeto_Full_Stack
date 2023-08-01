import { Request, Response } from "express";
import { listClientService } from "../../services/clients/listClient.service";

export const listClientController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const clients = await listClientService();

    return res.json(clients);
};
