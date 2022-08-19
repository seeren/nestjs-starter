import { DataSource, DataSourceOptions } from 'typeorm';

import { config } from 'dotenv';

import { DatabaseConfig } from './src/shared/config/database/database.config';

config({
  path: `${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}.env`,
});

export default new DataSource({
  ...(DatabaseConfig() as DataSourceOptions),
});
