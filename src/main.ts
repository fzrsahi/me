import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(appConfig.PORT);

  console.log('SERVER RUNNING ON PORT ' + appConfig.PORT);
}
bootstrap();
