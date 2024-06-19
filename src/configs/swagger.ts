import { DocumentBuilder } from '@nestjs/swagger';
import { swaggerConstants } from './constants';

export const swaggerConfig = new DocumentBuilder()
  .setTitle(swaggerConstants.title)
  .setDescription(swaggerConstants.description)
  .setVersion(swaggerConstants.version)
  .addTag(swaggerConstants.tag)
  .build();
