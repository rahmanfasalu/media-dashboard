import axios from "axios";

// Axiois interceptor to set tokens
axios.interceptors.request.use(
  function (config: any) {
    // const token: string = "your token";
    // config.headers["Authorization"] = `token ${token}`;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (err: any) {
    return Promise.reject(err);
  }
);

export default axios;
