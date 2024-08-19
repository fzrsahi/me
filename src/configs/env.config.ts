import { appConfigInterface } from './constants';

export default (): appConfigInterface => ({
  PORT: process.env.PORT,
  secretAuthKey: process.env.SECRET_AUTH_KEY,
  appMode: process.env.APP_MODE,
  hidePostEndpoints: /true/.test(process.env.HIDE_POST_ENDPOINTS),
  rateLimiterLimit: parseInt(process.env.RATE_LIMITER_LIMIT) || 5,
  rateLimiterTtl: parseInt(process.env.RATE_LIMITER_TTL) || 60000,
});
