import { Request, Response } from "express";
import { TClientUpdateRequest } from "../../interfaces/client.interfaces";
import { updateClientService } from "../../services/clients/updateUser.service";

export const updateClientsController = async (
    req: Request,
    resp: Response
): Promise<Response | void> => {
    const clientData: TClientUpdateRequest = req.body;
    const clientId = Number(req.params.id);
    const updateClient: TClientUpdateRequest = await updateClientService(
        clientData,
        clientId
    );

    return resp.status(200).json(updateClient);
};
