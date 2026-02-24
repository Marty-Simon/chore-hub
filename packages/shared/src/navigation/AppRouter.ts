/**
 * Application navigation router
 * Shared between web and mobile platforms
 */

import { NavigatorParam } from '@idealyst/navigation';
import Home from '../screens/Home';
import About from '../screens/About';

export const AppRouter: NavigatorParam = {
  path: '/',
  type: 'navigator',
  layout: 'stack',
  options: {
    headerShown: false,
  },
  routes: [
    {
      path: '/',
      type: 'screen',
      component: Home,
      options: { title: 'Chore Hub' },
    },
    {
      path: '/about',
      type: 'screen',
      component: About,
      options: { title: 'About Idealyst' },
    },
  ],
};

export default AppRouter;
