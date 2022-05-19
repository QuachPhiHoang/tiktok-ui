import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRoutes = [
    {
        path: '/',
        components: Home,
    },
    {
        path: '/following',
        components: Following,
    },
    {
        path: '/upload',
        components: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        components: Search,
        layout: null,
    },
    {
        path: '/@:nickname',
        components: Profile,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
