import { fetchAPI } from '../../utils/fetch';
import { ENDPOINT } from '../../utils/constant';

export async function getUserByAddress(address) {
    fetchAPI(`users/${address}`, {baseURL: ENDPOINT,})
}
export async function getUserById(id) {
    fetchAPI(`users/${id}`, {baseURL: ENDPOINT,})
}
export async function login(user) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // return `avatar url ${name}`;
    fetchAPI(`auth/local`, user,{baseURL: ENDPOINT,})
}
