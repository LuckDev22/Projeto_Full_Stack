import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeInsert,
    BeforeUpdate,
} from "typeorm";
import { Contact } from "./contact.entitie";
import { getRounds, hashSync } from "bcryptjs";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 140 })
    nome: string;

    @Column({ type: "varchar", length: 45, unique: true })
    email: string;

    @Column({ type: "varchar", length: 120 })
    password: string;

    @Column()
    telefone: string;

    @Column({ type: "boolean", default: false })
    admin: boolean;

    @CreateDateColumn({ type: "date" })
    registrationDate?: string | Date;

    @UpdateDateColumn({ type: "date" })
    updatedAt?: string | Date;

    @DeleteDateColumn({ type: "date", nullable: true })
    deletedAt?: string | Date | null | undefined;

    @OneToMany(() => Contact, (contact) => contact.client)
    contacts: Contact[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted: number = getRounds(this.password);

        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}
