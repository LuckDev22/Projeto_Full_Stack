import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Email invalido!"),
    password: z.string().nonempty("Senha obrigatória!"),
});

export type LoginData = z.infer<typeof loginSchema>;
