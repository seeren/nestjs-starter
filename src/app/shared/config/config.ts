import { DatabaseConfig } from 'src/app/shared/config/database/database.config';
import { I18nConfig } from 'src/app/shared/config/i18n/i18n.config';

export const Config = () => ({
  database: DatabaseConfig(),
  i18n: I18nConfig(),
});
