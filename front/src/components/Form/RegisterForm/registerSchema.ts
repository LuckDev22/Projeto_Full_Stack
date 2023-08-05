import { z } from "zod";

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(3, "O nome precisa ter pelo menos 3 caracteres!")
            .max(150, "Numero máximo de caracteres atingido!")
            .nonempty("Nome obrigatório!"),
        email: z
            .string()
            .email("Email invalido!")
            .nonempty("Email obrigatório!"),
        telefone: z.string().nonempty(),
        password: z
            .string()
            .min(8, "Sua senha deve conter no minimo 8 caracteres")
            .nonempty("Senha obrigatória!"),
        confirmPassword: z
            .string()
            .nonempty("A confirmação de senha é obrigatório!"),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "Password doesn't match",
        path: ["confirmPassword"],
    });
