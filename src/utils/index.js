import axios from "axios";

const END_POINT = import.meta.env.VITE_BACKEND_LOCALHOST;

const api = axios.create({
    baseURL: END_POINT,
    headers: {
        "Content-Type": "application/json",
    }
})

const request = async (method, url, data = null) => {
    try {
        const res = await api({method, url, data});
        return res.data;
    } catch (error) {
        console.error(`[API ERROR] ${method.toUpperCase()} ${url}`, error);
        throw error;
    }
}
export const safeAsync = async (asyncFn, onSuccess, onError) => {
    try {
        const result = await asyncFn();
        if(onSuccess) onSuccess(result);
        return result;
    } catch (error) {
        console.error("error:", error);
        if(onError) onError(error);
    }
}
export const get = (url) => request('get', url);
export const post = (url, data) => request('post', url, data);
export const put = (url, data) => request('put', url, data);
export const del = (url) => request('delete', url);