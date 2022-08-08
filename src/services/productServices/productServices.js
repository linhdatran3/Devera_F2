import { fetchAPI } from '../../utils/fetch';
import { ENDPOINT } from '../../utils/constant';



export async function getSingleProductById(id) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // return `avatar url ${name}`;
    fetchAPI(`products/${id}`, {baseURL: ENDPOINT})
}

export async function getListProducts() {
    fetchAPI(`products`, {baseURL: ENDPOINT})
}