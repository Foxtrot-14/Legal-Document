import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL:'http://backend:8000',
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
