import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "./../entities/contact.entitie";

export const ensureIsOwnerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contactId = Number(req.params.id);
    const clientId = res.locals.clientId;

    const contact = await contactRepository.findOne({
        where: {
            id: contactId,
        },
        relations: {
            client: true,
        },
    });

    if (!contact) {
        return res.status(404).json({
            message: "task not found",
        });
    }

    if (contact?.client.id !== clientId) {
        return res.status(403).json({
            message: "You dont`t have permissions",
        });
    }

    return next();
};
