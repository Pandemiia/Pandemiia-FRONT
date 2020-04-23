import { handleActions } from 'redux-actions';

import { toggleMenu } from './app.actions';

export const initialState = {
  menuOpen: false
};

const handleToggleMenu = (state, { payload }) => {
  return {
    ...state,
    menuOpen: payload
  };
};

export default handleActions(
  {
    [toggleMenu]: handleToggleMenu
  },
  initialState
);
