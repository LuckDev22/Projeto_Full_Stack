import { Router } from "express";
import { createLoginController } from "../controllers/login/login.controller";
import { loginSchemaReq } from "../schemas/login.schemas";
import { checkedBodyIsValidMiddleware } from "../middlewares/checkedBodyIsValid.middleware";

export const loginRoutes: Router = Router()

loginRoutes.post(
    "",
    // checkedBodyIsValidMiddleware(loginSchemaReq),
    createLoginController
);
