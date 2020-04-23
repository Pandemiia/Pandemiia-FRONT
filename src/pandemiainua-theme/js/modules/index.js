import { appReducer, appActions } from './app';

export const reducers = {
  app: appReducer
};

export const actions = {
  app: appActions
};

export default {
  reducers,
  actions
};
