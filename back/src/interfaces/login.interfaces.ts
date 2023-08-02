import { z } from "zod";
import { loginSchemaReq } from "../schemas/login.schemas";


export type TLoginReq = z.infer<typeof loginSchemaReq>;
