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

export const getOne = async (id) =>{
    const response = await request.get(`${baseUrl}/${id}`);

    return response;
}

export const edit = async (deviceId, data) => {
    const response = await request.put(`${baseUrl}/edit/${deviceId}`, data);

    return response;
}

export const remove = async (deviceId) => {
    const response = await request.remove(`${baseUrl}/${deviceId}`);

    return response;
}