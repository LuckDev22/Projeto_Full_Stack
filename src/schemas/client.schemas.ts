import { z } from "zod";

export const clientSchema = z.object({
    id: z.number(),
    nome: z.string()
    .max(140),
    email: z.string().email(),
    telefone: z.string(),
    registrationDate: z.string()
})