import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppError } from "../error";

import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entitie";

export const checkedIdExisting = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<Response | void> => {
    const clientId: number = Number(req.params.id);

    const clientRepository: Repository<Client> =
        AppDataSource.getRepository(Client);

    const client = await clientRepository.findOne({
        where: {
            id: clientId,
        },
    });

    if (!client) {
        throw new AppError("Client not found", 404);
    }
    return next();
};
