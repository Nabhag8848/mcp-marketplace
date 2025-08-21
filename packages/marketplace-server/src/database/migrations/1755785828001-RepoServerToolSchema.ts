import { MigrationInterface, QueryRunner } from 'typeorm';

export class RepoServerToolSchema1755785828001 implements MigrationInterface {
  name = 'RepoServerToolSchema1755785828001';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "core"."repository" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "source_id" character varying NOT NULL, "name" character varying(255) NOT NULL, "owner" character varying(255) NOT NULL, "readme_md" text, "readme_sha" character varying(40), "discovery_source" character varying(30) NOT NULL, "discovered_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "last_updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "source_created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "source_updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "UQ_787ee166a6a3218408457ffb236" UNIQUE ("source_id"), CONSTRAINT "PK_b842c26651c6fc0b9ccd1c530e2" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "core"."mcp_server" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "about" text, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "repo_source_id" character varying, CONSTRAINT "PK_940f98ed91dd060f63e6fc5634e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "core"."tool" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "title" character varying(255) NOT NULL, "description" text NOT NULL, "input_schema" jsonb, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "mcp_server_id" uuid, CONSTRAINT "PK_3bf5b1016a384916073184f99b7" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "core"."mcp_server" ADD CONSTRAINT "FK_4a8ae3ad462ad9a10876d08a01a" FOREIGN KEY ("repo_source_id") REFERENCES "core"."repository"("source_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "core"."tool" ADD CONSTRAINT "FK_7066e033a4eb28034bf78d9c153" FOREIGN KEY ("mcp_server_id") REFERENCES "core"."mcp_server"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "core"."tool" DROP CONSTRAINT "FK_7066e033a4eb28034bf78d9c153"`
    );
    await queryRunner.query(
      `ALTER TABLE "core"."mcp_server" DROP CONSTRAINT "FK_4a8ae3ad462ad9a10876d08a01a"`
    );
    await queryRunner.query(`DROP TABLE "core"."tool"`);
    await queryRunner.query(`DROP TABLE "core"."mcp_server"`);
    await queryRunner.query(`DROP TABLE "core"."repository"`);
  }
}
