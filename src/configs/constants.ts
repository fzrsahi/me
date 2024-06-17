export interface appConfigInterface {
  PORT: string;
  AppName?: string | null;
}

export const appConfig: appConfigInterface = {
  PORT: process.env.PORT,
  AppName: 'ME',
};
