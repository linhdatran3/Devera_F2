import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./Products'));

const Products = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default Products;