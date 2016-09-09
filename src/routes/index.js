import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import Home from './Home';
import CreateDemoRoute from './CreateDemo';
import DashboardRoute from './Dashboard';

export const createRoutes = (store) => ({
  path: '/',
  indexRoute: Home,
  childRoutes: [
    { component: CoreLayout,
      childRoutes: [
        CreateDemoRoute(store),
        DashboardRoute(store),
      ],
    },
  ],
});

export default createRoutes;
