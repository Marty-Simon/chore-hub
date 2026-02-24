/**
 * Application navigation router
 * Shared between web and mobile platforms
 */

import { NavigatorParam } from '@idealyst/navigation';
import Home from '../screens/Home';
import CalendarView from '../screens/CalendarView';
import ChoresList from '../screens/ChoresList';
import ChoreDetail from '../screens/ChoreDetail';
import MyChores from '../screens/MyChores';

export const AppRouter: NavigatorParam = {
  path: '/',
  type: 'navigator',
  layout: 'stack',
  options: {
    headerShown: true,
  },
  routes: [
    {
      path: '/',
      type: 'screen',
      component: Home,
      options: { title: 'Chore Hub', headerShown: false },
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
  ],
};

export default AppRouter;
