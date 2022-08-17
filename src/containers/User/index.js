import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./User'));

const User = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default User;