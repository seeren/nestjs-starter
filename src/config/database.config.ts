import { registerAs } from '@nestjs/config';

export default registerAs('database', (directory = 'dist') => ({
  type: process.env.DATABASE_DRIVER,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  entities: [`${directory}/**/*.entity{.ts,.js}`],
  autoLoadEntities: true,
  synchronize: false,
  migrations: [`${directory}/migrations/*{.ts,.js}`],
}));
