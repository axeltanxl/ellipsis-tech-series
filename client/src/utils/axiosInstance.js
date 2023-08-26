import axios from 'axios';



export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: { "Access-Control-Allow-Origin": "*" },
  withCredentials: false,
});



