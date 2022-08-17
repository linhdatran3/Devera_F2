import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./Cart'));

const Cart = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default Cart;