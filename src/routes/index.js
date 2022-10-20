import Home from '~/pages/Home';
import Menu from '~/pages/Menu';
import News from '~/pages/News';
import Community from '~/pages/Community';
import About from '~/pages/About';
import Address from '~/pages/Address';
import Coffee from '~/pages/MenuPages/Coffee';
import Freeze from '~/pages/MenuPages/Freeze';
import Other from '~/pages/MenuPages/Other';
import Tea from '~/pages/MenuPages/Tea';
import PhinCoffee from '~/pages/MenuPages/Coffee/PhinCoffee';
import Detail from '~/pages/Product';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/news', component: News },
    { path: '/community', component: Community },
    { path: '/about', component: About },
    { path: '/address', component: Address },
    { path: '/coffee', component: Coffee },
    { path: '/freeze', component: Freeze },
    { path: '/other', component: Other },
    { path: '/tea', component: Tea },
    { path: '/phincoffee', component: PhinCoffee },
    { path: '/detail/:id', component: Detail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
