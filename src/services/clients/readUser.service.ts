import { TUsersResponse } from "../../interfaces/users.interfaces";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { usersSchemaResponse } from "../../schemas/users.schemas";

export const readUserService = async (): Promise<TUsersResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const users: User[] = await userRepository.find();
    const returnUsers: TUsersResponse = usersSchemaResponse.parse(users);

    return returnUsers;
};
