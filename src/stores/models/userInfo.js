// import { getAvatar } from '../../services/UserService'
import { getAvatar } from '../../services/userServices/userServices';
export const userInfo = {
    state: {
        fistName: '',
        lastName: '',
        avatar: '',
    }, // initial state
    reducers: {
      // handle state changes with pure functions // functions: NOT async/await functions
      setFistName(state, fistName) {
        return {
            ...state,
            fistName,
          };
      },
      setLastName(state, lastName) {
        return {
            ...state,
            lastName,
          };
      },
      setAvatar(state, avatar) {
        return {
            ...state,
            avatar,
          };
      },
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
      async updateFirstName(payload, rootState) {
        this.setFistName(payload);
      },
      async getAvatartAsync(payload, rootState) {
        const avatarURL = await getAvatar(payload)
        this.setAvatar(avatarURL);
      },
    }),
    selectors: (slice, createSelector) => ({
        selectLastName() {
          return slice(state => state.lastName);
        },
        selectFirstName() {
          return slice(state => state.fistName);
        },
    }),
  };