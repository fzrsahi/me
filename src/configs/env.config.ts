import { appConfigInterface } from './constants';

export default (): appConfigInterface => ({
  PORT: process.env.PORT,
  secretAuthKey: process.env.SECRET_AUTH_KEY,
  appMode: process.env.APP_MODE,
  hidePostEndpoints: /true/.test(process.env.HIDE_POST_ENDPOINTS),
});
