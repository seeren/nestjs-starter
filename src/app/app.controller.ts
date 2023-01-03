import { Controller, Get } from '@nestjs/common';

import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class AppController {
  @Get()
  public async getHello(@I18n() i18n: I18nContext) {
    const message = await i18n.t('app.Hello');
    return message;
  }
}
