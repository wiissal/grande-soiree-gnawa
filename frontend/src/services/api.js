import axios from 'axios';
import {API_BASE_URL} from '../constants/api';

//create axios instance
export const apiClient  = axios.create({
  baseURL: API_BASE_URL,
  timeout:10000,
  headers:{
    'Content-Type': 'application/json',
  },
});
//handle API errors
apiClient.interceptors.response.use(
  (response)=> response,
  (error)=>{
    console.error('API error:',error.message);
    return Promise.reject(error);
  }
);