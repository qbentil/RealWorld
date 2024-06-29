import { fetchToken } from "@/hooks/localStorage";
import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
Axios.interceptors.request.use(
  (config) => {
    fetchToken((token: string) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    })
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default Axios;
