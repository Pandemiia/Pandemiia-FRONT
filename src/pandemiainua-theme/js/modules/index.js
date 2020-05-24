import { appReducer, appActions } from './app';
import { hospitalsReducer, hospitalsActions } from './hospitals';
import { solutionsReducer, solutionsActions } from './solutions';
import { authReducer, authActions } from './auth';

export const reducers = {
  app: appReducer,
  auth: authReducer,
  hospitals: hospitalsReducer,
  solutions: solutionsReducer
};

export const actions = {
  app: appActions,
  auth: authActions,
  hospitals: hospitalsActions,
  solutions: solutionsActions
};

export default {
  reducers,
  actions
};
