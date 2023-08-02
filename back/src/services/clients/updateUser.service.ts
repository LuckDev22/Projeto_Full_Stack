import { Repository } from "typeorm";
import {
    TClientResponse,
    TClientUpdateRequest,
} from "../../interfaces/client.interfaces";
import { Client } from "../../entities/client.entitie";
import { AppDataSource } from "../../data-source";
import { clientSchemaResponse } from "../../schemas/client.schemas";

export const updateClientService = async (
    clientData: TClientUpdateRequest,
    clientId: number
): Promise<TClientResponse> => {
    const clientRepository: Repository<Client> =
        AppDataSource.getRepository(Client);

    const oldClientData: Client | null = await clientRepository.findOneBy({
        id: clientId,
    });

    const newClientData: Client = clientRepository.create({
        ...oldClientData,
        ...clientData,
    });

    await clientRepository.save(newClientData);

    const returnClientUpdate: TClientResponse =
        clientSchemaResponse.parse(newClientData);

    return returnClientUpdate;
};
