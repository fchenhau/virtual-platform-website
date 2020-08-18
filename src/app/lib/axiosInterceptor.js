import axios from 'axios';
import util from "./util";
import { API_KEY } from '../config/settings';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

// Add a request interceptor
export const InitAxiosInterceptor = () => {
    let isAuthenticated = false;

    // Request
    axios.interceptors.request.use(
        async (config) => {
            const accessToken = await util.getToken();
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
    }, function (error) {
        
        // Check if error is forbidden (access token invalid)
        if (error && error.response.status === 403 && !isAuthenticated) {
            isAuthenticated = true;
            Actions.GetStarted();
            Alert.alert(
                null,
                'You are required to login again'
            )
            util.clearAll();

            throw error
        }

        throw error
    });
};