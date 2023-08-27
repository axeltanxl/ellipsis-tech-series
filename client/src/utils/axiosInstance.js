import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://${import.meta.env.VITE_BASE_URL_PROD}/api`,
  headers: { "Access-Control-Allow-Origin": "*" },
  withCredentials: false,
});