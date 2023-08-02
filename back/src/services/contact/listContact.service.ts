import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../error";
import { TContactsResponse } from "../../interfaces/contact.interfaces";
import { contactsSchemaResponse } from "../../schemas/contact.schemas";

export const listContactsService = async (
    clientId: number
): Promise<TContactsResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const clientRepository = AppDataSource.getRepository(Client);

    const client = await clientRepository.findOne({
        where: {
            id: clientId,
        },
    });

    if (!client) {
        throw new AppError("client not found", 404);
    }

    const contacts = await contactRepository.find({
        where: {
            client: { id: clientId },
        },
    });

    return contactsSchemaResponse.parse(contacts);
};
