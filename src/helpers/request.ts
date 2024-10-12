import axios, { AxiosError } from 'axios';

export type RequestError = {
  message: string;
  statusCode: number;
}

export const mediaUrl:string = import.meta.env.VITE_API_BASE_URL === "development" ? "https://dev.kasuwa.com" : "https://prod.kasuwa.com";
export const baseURL:string = 
  import.meta.env.VITE_API_BASE_URL === 'development' ? 
    'https://dev.kasuwa.com/api/v1/kasuwa' : 
  import.meta.env.VITE_API_BASE_URL === 'production' ? 
    'https://prod.kasuwa.com/api/v1/kasuwa' : "https://dev.kasuwa.com/api/v1/kasuwa"

export const apiClient = axios.create({
  baseURL, 
  headers: {"Content-Type": "application/json"},
}); 
    
export const castAxiosError = (err:unknown) => {
    return err as AxiosError<RequestError>
}