import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'http://localhost:4000';

const instance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

export default instance;
