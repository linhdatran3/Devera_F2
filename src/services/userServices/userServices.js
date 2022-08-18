import { fetchAPI } from '../../utils/fetch';
import { ENDPOINT } from '../../utils/constant';

export async function getUserByAddress(address) {
    fetchAPI(`users/${address}`, {baseURL: ENDPOINT,})
}
export async function getUserById(id) {
    fetchAPI(`users/${id}`, {baseURL: ENDPOINT,})
}
export async function login(identifier,password) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // return `avatar url ${name}`;
    const data={identifier,password}
    fetchAPI(`auth/local`, data,{baseURL: ENDPOINT,})
}
