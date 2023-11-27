import * as request from '../lib/request';

const baseUrl = 'http://localhost:3000/api';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (name, email, username, password, rePassword) => request.post(`${baseUrl}/register`, {
    name,
    email,
    username,
    password,
    rePassword,
});

export const logout = () => request.post(`${baseUrl}/logout`);  