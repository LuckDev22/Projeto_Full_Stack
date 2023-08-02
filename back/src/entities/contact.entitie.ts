import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
} from "typeorm";
import { Client } from "./client.entitie";

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @CreateDateColumn({ type: "date" })
    registrationDate?: string | Date;

    @ManyToOne(() => Client, client => client.contacts)
    client: Client;
}
