import axios from "axios";
import { API_URL } from "../config/settings";

const BASE_URL = API_URL;

const ApiAction = {
    get(url, params = {}) {
        const apiUrl = `${BASE_URL}${url}`;
        return axios.get(apiUrl, { params });
    },

    post(url, body, config = {}) {
        const apiUrl = `${BASE_URL}${url}`;
        return axios.post(apiUrl, body, config);
    },

    delete(url, params = {}) {
        const apiUrl = `${BASE_URL}${url}`;
        return axios.delete(apiUrl, { params });
    },

    put(url, body) {
        const apiUrl = `${BASE_URL}${url}`;
        return axios.put(apiUrl, body);
    },

    patch(url) {
        const apiUrl = `${BASE_URL}${url}`;
        return axios.patch(apiUrl);
    }

};

export default ApiAction;
