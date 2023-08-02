import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { Client } from "../entities/client.entitie";

export const checkedEmailExistingMiddleware = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<void | Response> => {
    const emailValid = req.body.email;

    const clientRepository: Repository<Client> =
        AppDataSource.getRepository(Client);

    const client = await clientRepository.findOneBy({
        email: emailValid,
    });

    if (client === undefined) {
        return next();
    }

    if (client) {
        throw new AppError("Email already exists", 409);
    }

    return next();
};
