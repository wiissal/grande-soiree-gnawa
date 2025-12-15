import axios from 'axios';
import {API_BASE_URL} from '../constants/api';

console.log('Creating axios instance with baseURL:', API_BASE_URL);

//create axios instance
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // Increased timeout from 10000
  headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.baseURL + config.url);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.status);
    return response;
  },
  (error) => {
    console.error('Response error:', error.message);
    console.error('Error config:', error.config);
    console.error('Error code:', error.code);
    return Promise.reject(error);
  }
);