import * as request from '../lib/request';


const baseUrl = 'http://localhost:3000/api/devices';


export const getAll = async () => {
    const response = await request.get(`${baseUrl}`)

    return response;
}

export const create = async (data) => {
    const response = await request.post(`${baseUrl}/create`, data);

    return response;

}