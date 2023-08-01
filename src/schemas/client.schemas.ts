import { z } from "zod";

export const clientSchema = z.object({
    id: z.number(),
    nome: z.string().max(140),
    email: z.string().email(),
    telefone: z.string(),
    password: z.string().min(4),
    admin: z.boolean().optional().default(false),
    registrationDate: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullish(),
});

export const clientSchemaRequest = clientSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
});

export const clientSchemaResponse = clientSchema.omit({
    password: true,
});

export const clientsSchemaResponse = z.array(clientSchemaResponse);

export const clientSchemaUpdate = clientSchemaRequest
    .omit({ admin: true, password: true })
    .partial();
