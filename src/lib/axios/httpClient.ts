import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
if (!API_BASE_URL) {
  throw new Error('API_BASE_URL is not defined in environment variables');
}

const axiosInstance = () =>{
  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return instance;
}

export interface ApiRequestOptions {
  params?: Record<string, unknown>;
  headers: Record<string, string>;
}
const httpGet = async (endpoint: string, options?: ApiRequestOptions) =>{
  try {
    const response = await axiosInstance().get(endpoint, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  }catch (error){
    console.error(`GET ${endpoint} failed:`, error);
    throw error;
  }
}
const httpPost = async (endPoint: string, data: unknown, options?: ApiRequestOptions) =>{
  try {
    const response = await axiosInstance().post(endPoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  }catch (error){
    console.error(`POST ${endPoint} failed:`, error);
    throw error;
  }
}

const httpPut = async (endPoint: string, data: unknown, options?: ApiRequestOptions) =>{
  try {
    const response = await axiosInstance().put(endPoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  }catch (error){
    console.error(`PUT ${endPoint} failed:`, error);
    throw error;
  }
}
const httpPatch = async (endPoint: string, data: unknown, options?: ApiRequestOptions) =>{
  try {
    const response = await axiosInstance().patch(endPoint, data, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  }catch (error){
    console.error(`PATCH ${endPoint} failed:`, error);
    throw error;
  }
}
const httpDelete = async (endPoint: string, options?: ApiRequestOptions) =>{
  try {
    const response = await axiosInstance().delete(endPoint, {
      params: options?.params,
      headers: options?.headers,
    });
    return response.data;
  }catch (error){
    console.error(`Delete ${endPoint} failed:`, error);
    throw error;
  }
}
export const httpClient = {
  get: httpGet,
  post: httpPost,
  put: httpPut,
  patch: httpPatch,
  delete: httpDelete,
}