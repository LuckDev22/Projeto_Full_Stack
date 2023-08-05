import { Router } from "express";
import swaggerUI from "swagger-ui-express";


export const swaggerDoc = Router();

swaggerDoc.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));


