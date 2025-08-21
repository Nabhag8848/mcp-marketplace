import { MigrationInterface, QueryRunner } from "typeorm";

export class RepoTargetField1755786652671 implements MigrationInterface {
    name = 'RepoTargetField1755786652671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."repository" ADD "is_target" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."repository" DROP COLUMN "is_target"`);
    }

}
