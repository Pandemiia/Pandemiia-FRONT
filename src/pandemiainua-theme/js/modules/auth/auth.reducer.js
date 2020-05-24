import { handleActions } from 'redux-actions';
import { loadAuth } from './auth.actions';
import { normalizeAuth } from './auth.normalizers';

const initialState = {};

const handleLoadAuth = (state, { payload }) => ({
  ...state,
  ...normalizeAuth(payload)
});

export default handleActions(
  {
    [loadAuth]: handleLoadAuth
  },
  initialState
);
