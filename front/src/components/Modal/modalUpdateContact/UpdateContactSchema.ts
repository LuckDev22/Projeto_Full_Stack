import { z } from "zod";

export const updateContactSchema = z.object({
    name: z
        .string()
        .min(3, "O nome precisa ter pelo menos 3 caracteres!")
        .max(150, "Numero máximo de caracteres atingido!")
        .nonempty("Nome obrigatório!"),
    email: z.string().email("Email invalido!").nonempty("Email obrigatório!"),
    telefone: z.string().nonempty(),
});
