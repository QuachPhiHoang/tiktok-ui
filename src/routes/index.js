import routesConfig from '~/config/routes';

import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRoutes = [
    {
        path: routesConfig.home,
        components: Home,
    },
    {
        path: routesConfig.following,
        components: Following,
    },
    {
        path: routesConfig.upload,
        components: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        components: Search,
        layout: null,
    },
    {
        path: routesConfig.profile,
        components: Profile,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
