import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./Home'));

const Home = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default Home;