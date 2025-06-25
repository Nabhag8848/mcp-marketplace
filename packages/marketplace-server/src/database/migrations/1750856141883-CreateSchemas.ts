import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemas1750856141883 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.query(`CREATE SCHEMA IF NOT EXISTS "core"`);
    await queryRunner.manager.query(
      `CREATE SCHEMA IF NOT EXISTS "discovery_source"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.query(`DROP SCHEMA IF EXISTS "core" RESTRICT`);
    await queryRunner.manager.query(
      `DROP SCHEMA IF EXISTS "discovery_source" RESTRICT`
    );
  }
}
