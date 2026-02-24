/**
 * Application navigation router
 * Shared between web and mobile platforms
 */

import { NavigatorParam } from '@idealyst/navigation';
import Home from '../screens/Home';
import About from '../screens/About';
import CalendarView from '../screens/CalendarView';
import ChoresList from '../screens/ChoresList';
import ChoreDetail from '../screens/ChoreDetail';
import MyChores from '../screens/MyChores';

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
      path: '/my-chores',
      type: 'screen',
      component: MyChores,
      options: { title: 'My Chores' },
    },
    {
      path: '/calendar',
      type: 'screen',
      component: CalendarView,
      options: { title: 'Calendar' },
    },
    {
      path: '/chores',
      type: 'screen',
      component: ChoresList,
      options: { title: 'All Chores' },
    },
    {
      path: '/chores/:id',
      type: 'screen',
      component: ChoreDetail,
      options: { title: 'Chore Details' },
    },
    {
      path: '/about',
      type: 'screen',
      component: About,
      options: { title: 'About' },
    },
  ],
};

export default AppRouter;
