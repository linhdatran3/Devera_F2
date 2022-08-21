import { fetchAPI } from '../../utils/fetch';
import { ENDPOINT } from '../../utils/constant';



export async function getSingleProductById(id) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // return `avatar url ${name}`;
    return fetchAPI(`/products/${id}`, {baseURL: ENDPOINT})
}
export async function setProductSoldOut(id) {
    return fetchAPI(`/products/${id}`, {baseURL: ENDPOINT})
}
export async function getListProducts() {
    return fetchAPI(`/products`, {baseURL: ENDPOINT})
}
