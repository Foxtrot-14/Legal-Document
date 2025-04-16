import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000/api'  // For local development
    : '/api',                      // For production (uses NGINX proxy)
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
