import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
} from "typeorm";
import { Contact } from "./contact.entitie";

@Entity()
export class Client {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 140 })
    nome: string;

    @Column({ type: "varchar", length: 45, unique: true })
    email: string;

    @Column()
    telefone: string;

    @CreateDateColumn({ type: "date" })
    registrationDate?: string | Date;

    @OneToMany(() => Contact, (contact) => contact.client, { cascade: true })
    contacts: Contact[];
}
