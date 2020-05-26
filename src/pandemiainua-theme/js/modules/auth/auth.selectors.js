import _get from 'lodash/get';

export const getAuth = state => state.auth;
export const getStep = state => state.auth.step;
export const getUser = state => state.auth.user;
export const isLoggedIn = state => {
  const user = getUser(state);
  return !!_get(user, 'token', null);
};

export default {
  getAuth,
  getStep,
  getUser,
  isLoggedIn
};
