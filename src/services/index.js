import axios from 'axios'


const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: '1000',
});

service.addToken = () => {
    service.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`
}

service.interceptors.response.use(function (req) {
    if (localStorage.getItem('authToken')) {
        service.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`
    }
    return req;
});

service.interceptors.response.use(function (response) {
    console.log(response);
    return response;
}, function (res) {
    if (res.response.status === 401) {
        localStorage.clear();
        window.location.href= '/';
        return res;
    }
});

export default service;