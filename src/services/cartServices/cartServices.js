import { fetchAPI } from "../../utils/fetch";
import { ENDPOINT } from "../../utils/constant";

export async function getListCarts(id) {
  return fetchAPI(`/carts/user/${id}`, {
    baseURL: ENDPOINT,
  });
}
