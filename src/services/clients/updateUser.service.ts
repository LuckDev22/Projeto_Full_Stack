import { Repository } from "typeorm";
import {
    TUserResponse,
    TUserUpdateRequest,
} from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";

export const updateUserService = async (
    userData: TUserUpdateRequest,
    userId: number
): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const oldUserData: User | null = await userRepository.findOneBy({
        id: userId,
    });

    const newUserData: User = userRepository.create({
        ...oldUserData,
        ...userData,
    });

    await userRepository.save(newUserData);

    const returnUserUpdate: TUserResponse =
        userSchemaResponse.parse(newUserData);

    return returnUserUpdate;
};
