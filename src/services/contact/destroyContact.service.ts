import { Request, Response } from "express";
import { destroyClientService } from "../clients/destroyClient.service";

export const destroyClientController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const clientId: number = Number(req.params.id);

    await destroyClientService(clientId);
    return res.status(204).send();
};
