import { z } from "zod";

export const contactSchema = z.object({
    id: z.number(),
    nome: z.string().max(140),
    email: z.string().email(),
    telefone: z.string(),
    registrationDate: z.string(),
});

export const contactSchemaRequest = contactSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
});

export const contactSchemaUpdate = contactSchema.omit({ id: true }).partial();

export const contactsSchemaResponse = z.array(contactSchema);