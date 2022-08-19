import { MariaDBConfig } from './mariadb.config';

export const DatabaseConfig = () => ({
  ...MariaDBConfig(),
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: process.env.DB_SYNCHRONIZE || false,
  migrationsTableName: 'migrations',
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
});
