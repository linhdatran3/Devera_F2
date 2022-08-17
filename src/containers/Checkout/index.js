import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./Checkout'));

const Checkout = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default Checkout;