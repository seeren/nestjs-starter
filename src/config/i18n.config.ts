import { registerAs } from '@nestjs/config';

export default registerAs('i18n', () => ({
  fallback: process.env.I18N_FALLBACK,
}));
