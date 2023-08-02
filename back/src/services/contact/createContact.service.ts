import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import {
    TContactRequest,
    TContactResponse,
} from "../../interfaces/contact.interfaces";
import { Client } from "../../entities/client.entitie";
import { AppError } from "../../error";
import { contactSchema } from "../../schemas/contact.schemas";

export const createContactService = async (
    contactData: TContactRequest,
    clientId: number
): Promise<TContactResponse> => {
    const contactRepository: Repository<Contact> =
        AppDataSource.getRepository(Contact);
    const clientRepository = AppDataSource.getRepository(Client);

    const client = await clientRepository.findOne({
        where: {
            id: clientId,
        },
    });

    if (!client) {
        throw new AppError("client not found", 404);
    }

    const contact = contactRepository.create({
        ...contactData,
        client,
    });

    await contactRepository.save(contact);

    return contactSchema.parse(contact);
};
