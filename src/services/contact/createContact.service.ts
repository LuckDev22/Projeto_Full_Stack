import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entitie"



export const createContactService = async (contactData: TContact):Promise<any> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact = contactRepository.create(contactData)
    await contactRepository.save(contact)

    return contact
}