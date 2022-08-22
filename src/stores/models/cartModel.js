//import { getListCarts } from "../../services/cartServices/cartServices";
import { ENDPOINT } from "../../utils/constant";
import axios from "axios";
export const cartModel = {
  state: {
    carts: [],
  }, // initial state
  reducers: {
    // handle state changes with pure functions // functions: NOT async/await functions
    setCarts(state, payload) {
      return {
        ...state,
        carts: [...payload],
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async getListCarts(id) {
      try {
        const token = localStorage.getItem("jwt");
        await axios
          .get(`${ENDPOINT}/carts/user/${id}`, {
            headers: { Authorization: "Bearer " + token },
          })
          .then((res) => res.data);
       
      } catch (error) {
        console.log(error);
      }
    },
  }),
  selectors: (slice, createSelector) => ({
    // selectName() {
    //   return slice(state => state.name);
    // },
    // selectFirstName() {
    //   return slice(state => state.fistName);
    // },
  }),
};
