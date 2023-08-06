import { MigrationInterface, QueryRunner } from "typeorm";

export class Index1691300547336 implements MigrationInterface {
    name = 'Index1691300547336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telefone" character varying(16) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_3e8ba81fb64ba00f644d6a22435" UNIQUE ("telefone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_3e8ba81fb64ba00f644d6a22435"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telefone" character varying NOT NULL`);
    }

}
