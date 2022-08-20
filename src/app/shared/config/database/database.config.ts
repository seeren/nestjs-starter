import { MariaDBConfig } from './mariadb.config';

export const DatabaseConfig = (cli = false) => {
  const baseDir = cli ? 'src' : 'dist';
  return {
    ...MariaDBConfig(),
    entities: [`${baseDir}/**/*.entity{.ts,.js}`],
    autoLoadEntities: true,
    synchronize: false,
    migrations: [`${baseDir}/migrations/*{.ts,.js}`],
  };
};
