import { getListProduct, getSingleProductById } from '../../services/productServices/productServices';
export const productInfo = {
    state: {
        name:'aaa',
        price:'',
    }, // initial state
    reducers: {
      // handle state changes with pure functions // functions: NOT async/await functions
      setProductName(state, productName) {
        return {
            ...state,
            productName,
          };
      },
      setPrice(state, price) {
        return {
            ...state,
            price,
          };
      },
      setProductById(state,product){
        return{
          ...state,
          product,
        };
      }
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
    //   async updateFirstName(payload, rootState) {
    //     this.setFistName(payload);
    //   },
    async getSingleProductById({id}){
        const res=await getSingleProductById(id);
        this.setProductById(res);
        return res;
    },
    async getListProduct(){
      const res=await getListProduct();
      return res;
    }

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