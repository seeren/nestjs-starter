import { DataSourceOptions } from 'typeorm';

import * as dotenv from 'dotenv';

import { DatabaseConfig } from 'src/config/database/database.config';

dotenv.config();

export default DatabaseConfig() as DataSourceOptions;
