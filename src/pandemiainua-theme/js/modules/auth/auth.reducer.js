import { handleActions } from 'redux-actions';
import { logIn, setActiveStep } from './auth.actions';
import { normalizeAuth } from './auth.normalizers';

const initialState = {
  step: 0
};

const handleLogin = (state, { payload }) => ({
  ...state,
  ...normalizeAuth(payload)
});

const handleStep = (state, { payload }) => ({
  ...state,
  step: payload
});

export default handleActions(
  {
    [logIn]: handleLogin,
    [setActiveStep]: handleStep
  },
  initialState
);
