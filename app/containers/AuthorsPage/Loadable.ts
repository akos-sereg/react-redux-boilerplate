import * as Loadable from 'react-loadable';

import LoadingIndicator from '../../components/LoadingIndicator';

export default Loadable({
    loader: () => import('./AuthorsPage'),
    loading: LoadingIndicator,
});
