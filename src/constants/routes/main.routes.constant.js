import {lazy} from 'react';
import {
  HOME_PATH
} from './main.paths.constant';

export const COMMON_ROUTES = [
  {
    path: HOME_PATH,
    title: 'Welcome',
    screen: lazy(() => import('../../screens/home.screen')),
  }
];
