import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app/app.module';

declare const module: {
  hot: {
    accept: () => void;
    dispose: (callable: () => Promise<void>) => void;
  };
};

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
};

bootstrap();
