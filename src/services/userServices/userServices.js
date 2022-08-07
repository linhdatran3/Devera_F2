import { fetchAPI } from '../../utils/fetch';
import { ENDPOINT } from '../../utils/constant';

export async function getAvatar(name) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // return `avatar url ${name}`;
    fetchAPI('users', {baseURL: ENDPOINT,})
}