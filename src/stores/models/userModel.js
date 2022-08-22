//import { getUserById } from "../../services/userServices/userServices";
import { ENDPOINT } from "../../utils/constant";
import axios from "axios";
export const userModel = {
  state: {
    user: {},
  }, // initial state
  reducers: {
    // handle state changes with pure functions // functions: NOT async/await functions
    setName(state, name) {
      return {
        ...state,
        name,
      };
    },
    setPassword(state, password) {
      return {
        ...state,
        password,
      };
    },
    setUser(state, payload) {
      return {
        ...state,
        user: { ...payload },
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    // async updateFirstName(payload, rootState) {
    //   this.setFistName(payload);
    // },
    // async getAvatartAsync(payload, rootState) {
    //   const avatarURL = await getAvatar(payload)
    //   this.setAvatar(avatarURL);
    // },
    async getUserById(id) {
      try {
        await axios
          .get(`${ENDPOINT}/users/${id}`)
          .then((res) => this.setUser(res.data));
        // const res=await getUserById(id);
        // this.setUser(res.data);
        // console.log("b")
        // this.setUser(res);
        // return res;
      } catch (error) {
        console.log(error);
      }
    },
  }),
  selectors: (slice, createSelector) => ({}),
};
