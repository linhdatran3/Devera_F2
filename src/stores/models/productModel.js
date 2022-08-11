import {
  getListProducts,
  getSingleProductById,
} from "../../services/productServices/productServices";
export const productModel = {
  state: {
    products: [],
    product: {},
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
        product:{...payload}
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

    async getListProducts() {
      try {
        const res = await getListProducts();
        this.setProducts(res);
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
