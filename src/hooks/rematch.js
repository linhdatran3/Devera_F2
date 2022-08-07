// import { useDispatch, useStore, useSelector } from 'react-redux';

// export function useRematchDispatch(selector = () => {}) {
//   const dispatch = useDispatch();
//   return selector(dispatch);
// }

// export function useSelect(mapSelectors) {
//   const { select } = useStore();
//   return useSelector(select(mapSelectors));
// }


import { useDispatch as useReduxDispatch, useSelector } from "react-redux";

const useDispatch = (selector) => {
  const dispatch = useReduxDispatch();
  return selector(dispatch);
};

export { useDispatch, useSelector };