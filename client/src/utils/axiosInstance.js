import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  headers: { "Access-Control-Allow-Origin": "*" },
  withCredentials: false,
});