import { appConfigInterface } from './constants';

export default (): appConfigInterface => ({
  PORT: process.env.PORT,
});
