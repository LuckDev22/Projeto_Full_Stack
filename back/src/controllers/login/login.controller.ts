import { Request, Response } from "express";
import { createLoginService } from "../../services/login/createLogin.service";
import { TLoginReq } from "../../interfaces/login.interfaces";

export const createLoginController = async (
    req: Request,
    resp: Response
): Promise<Response> => {
    const loginData: TLoginReq = req.body;
    const token: string = await createLoginService(loginData);

    return resp.json({ token });
};
