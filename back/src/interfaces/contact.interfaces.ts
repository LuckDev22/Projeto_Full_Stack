import { z } from "zod";
import {
    contactSchema,
    contactSchemaRequest,
    contactsSchemaResponse,
} from "../schemas/contact.schemas";
import { DeepPartial } from "typeorm";

export type TContact = z.infer<typeof contactSchema>;
export type TContactRequest = z.infer<typeof contactSchemaRequest>;
export type TContactResponse = z.infer<typeof contactSchema>;
export type TContactsResponse = z.infer<typeof contactsSchemaResponse>;
export type TContactUpdate = DeepPartial<TContactRequest>;
