import { MigrationInterface, QueryRunner } from 'typeorm';

export class DiscoverySourceSchema1755842000414 implements MigrationInterface {
  name = 'DiscoverySourceSchema1755842000414';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "core"."mcp_server" DROP CONSTRAINT "FK_4a8ae3ad462ad9a10876d08a01a"`
    );
    await queryRunner.query(
      `CREATE TYPE "discovery_source"."repository_type_enum" AS ENUM('single_mcp_server_repo', 'multiple_mcp_servers_repo', 'monorepo_with_mcp_servers', 'mcp_server_links_collection')`
    );
    await queryRunner.query(
      `CREATE TABLE "discovery_source"."repository" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "source_id" character varying NOT NULL, "name" character varying(255) NOT NULL, "owner" character varying(255) NOT NULL, "readme_md" text, "is_target" boolean NOT NULL DEFAULT false, "readme_sha" character varying(40), "discovery_source" character varying(30) NOT NULL, "type" "discovery_source"."repository_type_enum", "discovered_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "source_created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "source_updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "UQ_787ee166a6a3218408457ffb236" UNIQUE ("source_id"), CONSTRAINT "PK_b842c26651c6fc0b9ccd1c530e2" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(`DROP TABLE "core"."repository"`);
    await queryRunner.query(
      `ALTER TABLE "core"."mcp_server" ADD CONSTRAINT "FK_4a8ae3ad462ad9a10876d08a01a" FOREIGN KEY ("repo_source_id") REFERENCES "discovery_source"."repository"("source_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "core"."mcp_server" DROP CONSTRAINT "FK_4a8ae3ad462ad9a10876d08a01a"`
    );
    await queryRunner.query(
      `CREATE TABLE "core"."repository" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "source_id" character varying NOT NULL, "name" character varying(255) NOT NULL, "owner" character varying(255) NOT NULL, "readme_md" text, "is_target" boolean NOT NULL DEFAULT false, "readme_sha" character varying(40), "discovery_source" character varying(30) NOT NULL, "discovered_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "source_created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "source_updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "UQ_787ee166a6a3218408457ffb236" UNIQUE ("source_id"), CONSTRAINT "PK_b842c26651c6fc0b9ccd1c530e2" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(`DROP TABLE "discovery_source"."repository"`);
    await queryRunner.query(
      `DROP TYPE "discovery_source"."repository_type_enum"`
    );
    await queryRunner.query(
      `ALTER TABLE "core"."mcp_server" ADD CONSTRAINT "FK_4a8ae3ad462ad9a10876d08a01a" FOREIGN KEY ("repo_source_id") REFERENCES "core"."repository"("source_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
