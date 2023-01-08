import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1673193651419 implements MigrationInterface {
  name = 'Migration1673193651419';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`foo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`random\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`foo\``);
  }
}
