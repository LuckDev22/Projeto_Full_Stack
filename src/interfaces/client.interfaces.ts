import { z } from "zod";
import { clientSchema } from "../schemas/client.schemas";

export type TClient = z.infer<typeof clientSchema>