import {
  getListProducts,
  getSingleProductById,
} from "../../services/productServices/productServices";
import axios from "axios";
import { ENDPOINT } from "../../utils/constant";
export const productModel = {
  state: {
    products: [],
    createdProducts: [],
    ownerProducts: [],
    product: {},
    historyPriceOfProduct: null,
  }, // initial state
  reducers: {
    // handle state changes with pure functions // functions: NOT async/await functions
    setProducts(state, payload) {
      return {
        ...state,
        products: [...payload],
      };
    },
    setProduct(state, payload) {
      return {
        ...state,
        product: { ...payload },
      };
    },
    setHistoryPrice(state, payload) {
      return {
        ...state,
        historyPriceOfProduct: { ...payload },
      };
    },
    setCreatedProducts(state, payload) {
      return {
        ...state,
        createdProducts: [...payload],
      };
    },
    setOwnerProducts(state, payload) {
      return {
        ...state,
        ownerProducts: [...payload],
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions

    async getSingleProductById(id) {
      try {
        const res = await getSingleProductById(id);
        this.setProduct(res);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async historyPriceOfProduct(id) {
      try {
        const res = await axios.get(`${ENDPOINT}/carts/historyPrice/${id}`);
        this.setHistoryPrice(res.data);
      } catch (error) {
        console.log(error);
      }
    },

    async getListProducts() {
      try {
        const res = await getListProducts();
        this.setProducts(res);
      } catch (error) {
        console.log(error);
      }
    },

    async getListCreatedByUserId(id) {
      try {
        let token = localStorage.getItem("jwt");
        const res = await axios.get(
          `${ENDPOINT}/products/getlistcreated/${id}`,
          { headers: { Authorization: "Bearer " + token } }
        );
        this.setCreatedProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getListUserOwnByAddress(address) {
      try {
        let token = localStorage.getItem("jwt");
        const res = await axios.get(
          `${ENDPOINT}/products/getlistown/${address}`,
          { headers: { Authorization: "Bearer " + token } }
        );
        this.setOwnerProducts(res.data);
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
