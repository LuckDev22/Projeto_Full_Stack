import { Request, Response } from "express";

export const createUserController = async (req: Request, resp: Response): Promise<Response> => {
    const userData = req.body
    // const newUser = await 
    return resp.status(201).json("usuario criado")
} 