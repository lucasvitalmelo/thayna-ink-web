import { env } from '@/settings/env';

import axios from 'axios';

export const Api = axios.create({
  baseURL: env.SERVER_API,
  timeout: 10000,
  withCredentials: true,
});
