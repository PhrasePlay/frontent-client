import axios from 'axios';

export const API = axios.create({
    baseURL: import.meta.env.BASE_URL
});

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');


        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    async (error) => {
        return await Promise.reject(error);
    }
);