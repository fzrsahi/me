import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export interface appConfigInterface {
  PORT: string;
  AppName?: string | null;
  secretAuthKey?: string | null;
  appMode: appMode;
  hidePostEndpoints: boolean;
  rateLimiterTtl: number;
  rateLimiterLimit: number;
}

type appMode = 'development' | 'production' | string;

export const appConfig: appConfigInterface = {
  PORT: process.env.PORT,
  AppName: 'ME',
  secretAuthKey: process.env.SECRET_AUTH_KEY,
  appMode: process.env.APP_MODE,
  hidePostEndpoints: /true/.test(process.env.HIDE_POST_ENDPOINTS),
  rateLimiterLimit: parseInt(process.env.RATE_LIMITER_LIMIT) || 5,
  rateLimiterTtl: parseInt(process.env.RATE_LIMITER_TTL) || 60000,
};

//Swagger
export const swaggerConstants = {
  title: 'Fazrul Anugrah Sahi Personal Web',
  description: 'This is my personal web. but, in backend style',
  version: '1.0',
  tag: 'Fazrul Anugrah Sahi Endpoints',
  endpoints: '/',
};

export const swaggerAuthConstants: SecuritySchemeObject = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'api-auth-key',
  name: 'api-auth-key',
  description: 'Enter Api Auth Key Token',
  in: 'header',
};

export const swaggerAuthNameConstants: string = 'api-auth-key';

export const statusOk = 'OK';
export const statusFail = 'FAIL';
