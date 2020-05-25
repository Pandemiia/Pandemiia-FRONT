import { createAction } from 'redux-actions';

export const logIn = createAction('LOGIN_USER', ({ username, email, password }) => ({ client }) =>
  client.post('/auth/login/', {
    username,
    email,
    password
  })
);

export const register = createAction('REGISTER_USER', ({ email, password1, password2 }) => ({ client }) =>
  client.post('/auth/register/', {
    email,
    password1,
    password2
  })
);

export const setActiveStep = createAction('SET_STEP', step => step);

export default {
  logIn,
  register,
  setActiveStep
};
