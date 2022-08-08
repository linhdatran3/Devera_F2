import { getListProducts} from '../../services/productServices/productServices';
export const productModel = {
    state: {
        products:[]
    }, // initial state
    reducers: {
      // handle state changes with pure functions // functions: NOT async/await functions
      setProducts(state, payload) {
        return {
            ...state,
            products:[...payload],
          };
      },
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
    //   async updateFirstName(payload, rootState) {
    //     this.setFistName(payload);
    //   },
    // async getSingleProductById({id}){
    //     const res=await getSingleProductById(id);
    //     this.setProductById(res);
    // },


    async getListProducts(){
        try {
            const res=await getListProducts();
            this.setProducts(res)
        } catch (error) {
            console.log(error)
        }
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