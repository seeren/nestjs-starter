import { DatabaseConfig } from './database/database.config';
import { I18nConfig } from './i18n/i18n.config';

export const Config = () => ({
  database: DatabaseConfig(),
  i18n: I18nConfig(),
});
