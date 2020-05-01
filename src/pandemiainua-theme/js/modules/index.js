import { appReducer, appActions } from './app';
import { hospitalsReducer, hospitalsActions } from './hospitals';
import { solutionsReducer, solutionsActions } from './solutions';

export const reducers = {
  app: appReducer,
  hospitals: hospitalsReducer,
  solutions: solutionsReducer
};

export const actions = {
  app: appActions,
  hospitals: hospitalsActions,
  solutions: solutionsActions
};

export default {
  reducers,
  actions
};
