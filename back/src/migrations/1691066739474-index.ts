import { MigrationInterface, QueryRunner } from "typeorm";

export class Index1691066739474 implements MigrationInterface {
    name = 'Index1691066739474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "nome" TO "name"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "nome" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "name" TO "nome"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "name" TO "nome"`);
    }

}
