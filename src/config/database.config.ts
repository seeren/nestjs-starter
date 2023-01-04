import { registerAs } from '@nestjs/config';

export default registerAs('database', (cli = false) => {
  const baseDir = cli ? 'src' : 'dist';
  return {
    type: process.env.DATABASE_DRIVER,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    entities: [`${baseDir}/**/*.entity{.ts,.js}`],
    autoLoadEntities: true,
    synchronize: false,
    migrations: [`${baseDir}/migrations/*{.ts,.js}`],
  };
});
