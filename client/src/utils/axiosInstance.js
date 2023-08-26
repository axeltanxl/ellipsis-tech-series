import axios from 'axios';



export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: { "Access-Control-Allow-Origin": "*" },
  withCredentials: false,
});



