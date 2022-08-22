import axios from "axios";
// 54.180.113.36
//http://wetube-phenomenonlee.shop/
export const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = sessionStorage.getItem("token");
  config.headers.common["authorization"] = `Bearer ${accessToken}`;
  return config;
});
