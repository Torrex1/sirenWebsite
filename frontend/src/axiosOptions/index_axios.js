import axios from "axios";

const $api = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000/api",
})

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default $api