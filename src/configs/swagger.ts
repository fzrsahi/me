import { DocumentBuilder } from '@nestjs/swagger';
import {
  swaggerAuthConstants,
  swaggerAuthNameConstants,
  swaggerConstants,
} from './constants';

export const swaggerConfig = new DocumentBuilder()
  .setTitle(swaggerConstants.title)
  .setDescription(swaggerConstants.description)
  .setVersion(swaggerConstants.version)
  .addBasicAuth(swaggerAuthConstants, swaggerAuthNameConstants)
  .build();
