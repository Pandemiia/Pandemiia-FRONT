import i18n from 'i18n';

import Home from './home';
import Needs from './needs';
import Goods from './goods';
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
    path: '/needs',
    name: i18n.t('sidebar.needs'),
    permission: ['guest'],
    component: Needs
  },
  {
    path: '/goods',
    name: i18n.t('sidebar.goods'),
    permission: ['guest'],
    component: Goods
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
