import { ApiOperationOptions, ApiResponseOptions } from '@nestjs/swagger';
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
  description: `This is my personal web, but with a backend twist! Built using Node.js, NestJS, PostgreSQL, Docker, Jenkins, and Nginx, it’s more than just a site—it’s a masterpiece😎👌🔥. From the code to the deployment pipeline, everything’s running smooth and scalable, just like a pro backend setup should be wkwkw 😎. So, dive in and explore what makes Fazrul Anugrah Sahi tick behind the scenes! \n 
  
  Here’s the link to check it out: https://github.com/fzrsahi/me. Dive in and enjoyyy!`,
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

export const swaggerAboutMeDesc: ApiOperationOptions = {
  summary: 'Access the "About Fazrul Anugrah Sahi" endpoint',
  description:
    'Just hit "Try it out" and then "Execute" to grab a quick background about Fazrul Anugrah Sahi',
};

export const swaggerExperiencesDesc: ApiOperationOptions = {
  summary: 'Access the "Experiences" endpoint',
  description:
    'Retrieve a list of past experiences, detailing Fazrul Anugrah Sahi’s professional journey.',
};

export const swaggerContactsDesc: ApiOperationOptions = {
  summary: 'Access the "Contacts" endpoint',
  description:
    'Get a list of contact information for connecting with Fazrul Anugrah Sahi.',
};

export const swaggerOKResponse: ApiResponseOptions = {
  description: 'If you get a 200, you nailed it!',
  status: '2XX',
};

export const swaggerBadRequestResponse: ApiResponseOptions = {
  description: 'If you get a 4xx, you messed up!',
  status: '4XX',
};

export const swaggerInternalServerErrorResponse: ApiResponseOptions = {
  description: 'If you get a 5xx, my server messed up!',
  status: '5XX',
};
