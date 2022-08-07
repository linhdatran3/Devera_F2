import axios from 'axios';
import { store } from '../stores';
import { hideLoading, showLoading } from '../stores/features/loadingSlice';

const url = {
  baseUrl: "http://localhost:1337",
  products: "/products",
  carts: '/carts',
  users: '/users',
  login: '/auth/local',
}

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": 'application/json',
    "Accept": "application/json"
  }
})

instance.interceptors.request.use(request => {
  // console.log('request');
  store.dispatch(showLoading())
  const state = store.getState();
  // console.log(state.auth.token)
  if (state.auth.token) {
    request.headers.Authorization = `Bearer ${state.auth.token}`;
  }
  return request
})

instance.interceptors.response.use(response => {
  store.dispatch(hideLoading());

  return response.data
}, error => {
  // console.log(error);
  store.dispatch(hideLoading());
  if (!error.response) {
    // window.location.href = "/no-internet";
  } else {
    switch (error.response.status) {
      // case 401:
      //   window.location.href = '/login';
      //   break;
      // case 403:
      //   window.location.href = "/no-permission";
      //   break;
      // case 404:
      //   window.location.href = "/no-permission";
      //   break;
      default:
        break;
    }
    return Promise.reject(error)
  }
})

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  promise: axios.all,
  spread: axios.spread,
}

export default api;