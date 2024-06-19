import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig, swaggerConfig, swaggerConstants } from './configs';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(swaggerConstants.endpoints, app, document);

  await app.listen(appConfig.PORT);
  console.log('SERVER RUNNING ON PORT ' + appConfig.PORT);
}
bootstrap();
