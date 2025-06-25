import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemas implements MigrationInterface {
  name = 'CreateSchemas';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create schemas if they don't exist
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "core"`);
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "discovery_source"`);

    // Set search path to include both schemas
    await queryRunner.query(
      `ALTER DATABASE CURRENT SET search_path TO core,discovery_source,public`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Note: Be careful with dropping schemas in production
    // This will only drop if they're empty
    await queryRunner.query(
      `DROP SCHEMA IF EXISTS "discovery_source" RESTRICT`
    );
    await queryRunner.query(`DROP SCHEMA IF EXISTS "core" RESTRICT`);
  }
}
