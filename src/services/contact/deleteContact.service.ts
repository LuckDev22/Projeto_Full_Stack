import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../error";

export const deleteContactService = async (
    contactId: number
): Promise<void> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOneBy({ id: contactId });

    if (!contact) {
        throw new AppError("contact not found", 404);
    }

    await contactRepository.remove(contact);
};
