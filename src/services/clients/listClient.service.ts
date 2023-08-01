import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { TClientsResponse } from "../../interfaces/client.interfaces";
import { clientsSchemaResponse } from "../../schemas/client.schemas";

export const listClientService = async (): Promise<TClientsResponse> => {
    const clientRepository: Repository<Client> =
        AppDataSource.getRepository(Client);
    const clients: Client[] = await clientRepository.find();
    const returnClients = clientsSchemaResponse.parse(clients);

    return returnClients;
};
