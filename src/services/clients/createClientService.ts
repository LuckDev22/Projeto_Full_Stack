import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entitie"

export const createClientService = async (clientData: any):Promise<any> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client = clientRepository.create(clientData)
    await clientRepository.save(client)

    return client
}