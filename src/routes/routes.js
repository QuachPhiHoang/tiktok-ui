import config from '~/config';

import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRoutes = [
    {
        path: config.routes.home,
        components: Home,
    },
    {
        path: config.routes.following,
        components: Following,
    },
    {
        path: config.routes.upload,
        components: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        components: Search,
        layout: null,
    },
    {
        path: config.routes.profile,
        components: Profile,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
