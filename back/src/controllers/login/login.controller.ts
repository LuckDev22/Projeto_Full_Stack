import { Request, Response } from "express";
import {
    IloginResponse,
    createLoginService,
} from "../../services/login/createLogin.service";
import { TLoginReq } from "../../interfaces/login.interfaces";

export const createLoginController = async (
    req: Request,
    resp: Response
): Promise<Response> => {
    const loginData: TLoginReq = req.body;
    const loginResponse: IloginResponse = await createLoginService(loginData);
    
    return resp.json(loginResponse);
};
