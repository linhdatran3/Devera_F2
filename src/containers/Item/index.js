import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./Item'));

const Item = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default Item;