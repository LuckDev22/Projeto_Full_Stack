import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { Contact } from "../entities/contact.entitie";

export const checkedExistingContactMiddleware = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<void | Response> => {
    const telefoneValid = req.body.telefone;
    // console.log(telefoneValid)

    const contactRepository: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const contact = await contactRepository.findOneBy({
        telefone: telefoneValid,
    });

    
    if (contact === undefined || null) {
        return next();
    }

    if (contact) {
        throw new AppError("Contact already exists", 409);
    }

    return next();
};
