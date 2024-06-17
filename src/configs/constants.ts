export interface appConfigInterface {
  PORT: string;
  appName?: string | null;
}

export const appConfig: appConfigInterface = {
  PORT: process.env.PORT,
  appName: 'ME',
};
