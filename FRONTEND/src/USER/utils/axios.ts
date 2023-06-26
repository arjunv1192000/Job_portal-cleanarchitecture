import axios from "axios";
import { baseUrl } from "./constants";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem("access_token_user");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      
      window.location.href = "/user/login";
    }
    return Promise.reject(error);
  }
);

export default instance;
