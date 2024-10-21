import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.jsonbin.io/v3/b/',
  timeout: 1000,
  headers: {
    'X-Master-Key':
      '$2a$10$gdZcfJm8sigB9cjwU2nZauWWeGGblbB7yYOsbPPezi99/S3.nJWPe',
  },
});
