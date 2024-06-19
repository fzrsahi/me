export interface appConfigInterface {
  PORT: string;
  AppName?: string | null;
}

export const appConfig: appConfigInterface = {
  PORT: process.env.PORT,
  AppName: 'ME',
};

//Swagger
export const swaggerConstants = {
  title: 'Fazrul Anugrah Sahi Personal Web',
  description: 'This is my personal web. but, in backend style',
  version: '1.0',
  tag: 'fzrsahi',
  endpoints: '/',
};

export const statusOk = 'OK';
export const statusFail = 'FAIL';
