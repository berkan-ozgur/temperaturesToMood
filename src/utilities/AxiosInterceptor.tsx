import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const customAxios = axios.create({
    baseURL: `https://`
});

const requestHandler = (request: AxiosRequestConfig<any>) => {
    return request;
};

const responseHandler = (response: AxiosResponse) => {
    return response;
};

const errorHandler = (error: any) => {
    return Promise.reject(error);
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);

export default customAxios;