import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";

export const deleteClientService = async (clientId: number): Promise<void> => {
    const clientRepository: Repository<Client> =
        AppDataSource.getRepository(Client);

    const client: Client | null = await clientRepository.findOneBy({
        id: clientId,
    });

    await clientRepository.softRemove(client!);
};
