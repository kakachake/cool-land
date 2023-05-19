import axios from "axios";
console.log(import.meta.env.VITE_API_URL);

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: {},
});

// TODO: 增加请求拦截器，响应拦截器

export default request;
