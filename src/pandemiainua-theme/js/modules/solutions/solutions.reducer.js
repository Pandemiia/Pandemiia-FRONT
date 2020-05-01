import { handleActions } from 'redux-actions';

import { loadSolutionsMaterials, loadSolutionsTools, loadSolutionsCategories } from './solutions.actions';
import {
  normalizeSolutionsMaterials,
  normalizeSolutionsTools,
  normalizeSolutionsCategories
} from './solutions.normalizers';

export const initialState = {
  materials: {},
  categories: {},
  tools: {}
};

const handleSolutionsMaterials = (state, { payload }) => {
  return {
    ...state,
    materials: normalizeSolutionsMaterials(payload)
  };
};

const handleSolutionsCategories = (state, { payload }) => {
  return {
    ...state,
    categories: normalizeSolutionsCategories(payload)
  };
};

const handleSolutionsTools = (state, { payload }) => {
  return {
    ...state,
    tools: normalizeSolutionsTools(payload)
  };
};

export default handleActions(
  {
    [loadSolutionsMaterials]: handleSolutionsMaterials,
    [loadSolutionsTools]: handleSolutionsTools,
    [loadSolutionsCategories]: handleSolutionsCategories
  },
  initialState
);
