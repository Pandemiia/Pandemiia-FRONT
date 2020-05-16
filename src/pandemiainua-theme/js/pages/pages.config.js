import i18n from 'i18n';

import Home from './home';
import Hospital from './hospital';
import Hospitals from './hospitals';
import Solutions from './solutions';
import About from './about';
import Contacts from './contacts';

const routes = [
  {
    path: '/',
    name: i18n.t('sidebar.home'),
    permission: ['guest'],
    component: Home
  },
  {
    path: '/hospitals',
    name: i18n.t('sidebar.hospitals'),
    permission: ['guest'],
    component: Hospitals
  },
  {
    path: '/hospitals/:id',
    name: null,
    permission: ['guest'],
    component: Hospital
  },
  {
    path: '/solutions',
    name: i18n.t('sidebar.solutions'),
    permission: ['guest'],
    component: Solutions
  },
  {
    path: '/about',
    name: i18n.t('sidebar.about'),
    permission: ['guest'],
    component: About
  },
  {
    path: '/contacts',
    name: i18n.t('sidebar.contacts'),
    permission: ['guest'],
    component: Contacts
  }
];

export default routes;
