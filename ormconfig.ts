import { DataSource, DataSourceOptions } from 'typeorm';

import { config } from 'dotenv';

import { DatabaseConfig } from './src/app/shared/config/database/database.config';

config({
  path: `${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}.env`,
});

export default new DataSource({
  ...(DatabaseConfig(true) as DataSourceOptions),
});
