import { z } from "zod";

export const loginSchemaReq = z.object({
    id: z.number().optional(),
    email: z.string().email(),
    password: z.string().min(4),
});

export const loginSchemaResp = z.object({
    token: z.string(),
});
