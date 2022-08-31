import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./Favorites'));

const Favorites = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default Favorites;