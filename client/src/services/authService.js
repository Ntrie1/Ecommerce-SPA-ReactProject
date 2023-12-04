import * as request from '../lib/request';

const baseUrl = 'http://localhost:3000/api';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (email, username, password, repeatPassword) => request.post(`${baseUrl}/register`, {
    email,
    username,
    password,
    repeatPassword,
});

export const logout = () => request.post(`${baseUrl}/logout`);  

export const createdDevices = async () => {
    const response = await request.get(`${baseUrl}/users/profile/devices`);

    return response;
}