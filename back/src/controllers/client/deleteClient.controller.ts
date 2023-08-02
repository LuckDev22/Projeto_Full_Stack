import { Request, Response } from "express";
import { deleteClientService } from "../../services/clients/deleteClient.service";

export const deleteClientController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const clientId: number = Number(req.params.id);

    await deleteClientService(clientId);
    return res.status(204).send();
};
