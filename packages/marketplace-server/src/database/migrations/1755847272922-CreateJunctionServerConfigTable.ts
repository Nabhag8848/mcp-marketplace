import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateJunctionServerConfigTable1755847272922 implements MigrationInterface {
    name = 'CreateJunctionServerConfigTable1755847272922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "core"."mcp_client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "description" character varying(320), "about" text, CONSTRAINT "PK_9a5539176f583c07e9b654e66c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "core"."server_config" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "config" jsonb, "mcp_client_id" uuid, "mcp_server_id" uuid, CONSTRAINT "UQ_3eeba0b122e482f63811dbbaca4" UNIQUE ("mcp_client_id", "mcp_server_id"), CONSTRAINT "PK_f0bf5101843e99a758694f11417" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "core"."server_config" ADD CONSTRAINT "FK_448ef80f77e39b50a8742da9e5c" FOREIGN KEY ("mcp_client_id") REFERENCES "core"."mcp_client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."server_config" ADD CONSTRAINT "FK_5edfd3b425c95044b2072e4ba0b" FOREIGN KEY ("mcp_server_id") REFERENCES "core"."mcp_server"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."server_config" DROP CONSTRAINT "FK_5edfd3b425c95044b2072e4ba0b"`);
        await queryRunner.query(`ALTER TABLE "core"."server_config" DROP CONSTRAINT "FK_448ef80f77e39b50a8742da9e5c"`);
        await queryRunner.query(`DROP TABLE "core"."server_config"`);
        await queryRunner.query(`DROP TABLE "core"."mcp_client"`);
    }

}
