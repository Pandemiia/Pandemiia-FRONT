import { createAction } from 'redux-actions';

export const toggleMenu = createAction('TOGGLE_MENU', open => open);
export const toggleFilter = createAction('TOGGLE_FILTER', open => open);

export default {
  toggleMenu,
  toggleFilter
};
