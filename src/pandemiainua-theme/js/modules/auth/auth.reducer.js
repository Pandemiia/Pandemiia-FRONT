import { handleActions } from 'redux-actions';
import { logIn, setActiveStep } from './auth.actions';
import { normalizeLogin } from './auth.normalizers';

const initialState = {
  user: null,
  step: 0
};

const handleLogin = (state, { payload }) => {
  const { data } = payload;
  return {
    ...state,
    user: normalizeLogin(data)
  };
};

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
