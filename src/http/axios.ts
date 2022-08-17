import axios, {AxiosRequestConfig} from 'axios';

export const AUTHORIZATION_HEADER = 'Authorization';

const host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
});

const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.headers === undefined) {
        config.headers = {}
    }
    config.headers[AUTHORIZATION_HEADER] = `Bearer ${localStorage.getItem('jwt')}`;
    return config;
};

authHost.interceptors.request.use(authInterceptor);
export {host, authHost};