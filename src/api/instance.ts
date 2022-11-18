import axios from 'axios';

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000/v1';

export const instance = axios.create({
  baseURL: API_BASE_URL
});
