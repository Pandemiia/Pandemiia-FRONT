import { handleActions } from 'redux-actions';

import { toggleMenu, toggleFilter } from './app.actions';

export const initialState = {
  menuOpen: false,
  filterOpen: false
};

const handleToggleMenu = (state, { payload }) => {
  return {
    ...state,
    menuOpen: payload
  };
};

const handleToggleFilter = (state, { payload }) => {
  return {
    ...state,
    filterOpen: payload
  };
};

export default handleActions(
  {
    [toggleMenu]: handleToggleMenu,
    [toggleFilter]: handleToggleFilter
  },
  initialState
);
