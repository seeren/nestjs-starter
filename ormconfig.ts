import type { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

import databaseConfig from './src/config/database.config';

config();

export default new DataSource({
  ...(databaseConfig('src') as DataSourceOptions),
});
