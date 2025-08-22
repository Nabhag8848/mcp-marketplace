import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemas1750856141883 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('core', true);
    await queryRunner.createSchema('discovery_source', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('core', true, true);
    await queryRunner.dropSchema('discovery_source', true, true);
  }
}
