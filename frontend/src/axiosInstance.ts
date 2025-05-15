import axios, { AxiosInstance } from "axios";

const host:string = "20.244.4.80"

const axiosInstance: AxiosInstance = axios.create({
  baseURL:`http://${host}/api`,
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
