import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./HistoryCart'));

const HistoryCart = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default HistoryCart;