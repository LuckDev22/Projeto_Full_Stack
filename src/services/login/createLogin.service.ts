import { Repository } from "typeorm";
import { TLoginReq } from "../../interfaces/login.interfaces";
import { Client } from "../../entities/client.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const createLoginService = async (
    loginData: TLoginReq
): Promise<string> => {
    const clientRepository: Repository<Client> =
        AppDataSource.getRepository(Client);

    const client: Client | null = await clientRepository.findOne({
        where: {
            email: loginData.email,
        },
    });

    if (!client) {
        throw new AppError("Invalid credentials", 401);
    }

    const validPassword: boolean = await compare(
        loginData.password,
        client.password
    );

    if (!validPassword) {
        throw new AppError("Invalid credentials", 401);
    }

    const token = jwt.sign(
        {
            id: client.id,
            admin: client.admin,
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "1d",
            subject: client.id.toString(),
        }
    );

    return token;
};
