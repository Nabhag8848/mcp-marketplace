import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDescriptionField1755865091036 implements MigrationInterface {
    name = 'CreateDescriptionField1755865091036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."mcp_server" ADD "description" character varying(350)`);
        await queryRunner.query(`ALTER TABLE "discovery_source"."repository" ADD "description" character varying(350)`);
        await queryRunner.query(`ALTER TABLE "core"."mcp_client" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "core"."mcp_client" ADD "description" character varying(350)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."mcp_client" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "core"."mcp_client" ADD "description" character varying(320)`);
        await queryRunner.query(`ALTER TABLE "discovery_source"."repository" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "core"."mcp_server" DROP COLUMN "description"`);
    }

}
