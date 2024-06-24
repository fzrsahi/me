import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig, swaggerConfig, swaggerConstants } from './configs';
import { SwaggerModule } from '@nestjs/swagger';
import { ExceptionsFilterService } from 'src/exceptions/exceptions.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(swaggerConstants.endpoints, app, document);
  app.useGlobalFilters(new ExceptionsFilterService());

  await app.listen(appConfig.PORT);
  console.log('Running On: ' + await app.getUrl());
}
bootstrap();
