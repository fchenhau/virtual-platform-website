import axios from 'axios';
import util from "./util";
import { API_KEY } from '../config/settings';

// Add a request interceptor
export const InitAxiosInterceptor = () => {
    let isAuthenticated = false;

    // Request
    axios.interceptors.request.use(
        async (config) => {
            const accessToken = false;
            if (accessToken) {
                config.headers["Authorization"] = `Bearer ${accessToken}`;
            }

            config.headers['X-API-KEY'] = API_KEY;
            
            return config;
        },
        error => {
            Promise.reject(error)
        });

    // Response
    axios.interceptors.response.use((response) => {
        return response
    }, (error) => {
        throw error
    });
};