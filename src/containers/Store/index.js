import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./CreateNFT'));

const CreateNFT = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default CreateNFT;