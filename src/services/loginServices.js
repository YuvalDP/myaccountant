import service from './index'

export const LoginRequest = (payload) => {
    return service.post('/auth/login', payload);
};

export const isAuthenticated = () => {
    service.addToken();
   return service.post('/auth/profile');
}