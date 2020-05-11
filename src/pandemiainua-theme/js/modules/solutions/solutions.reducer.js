import { handleActions } from 'redux-actions';

import {
  loadSolutionsMaterials,
  loadSolutionsTools,
  loadSolutionsCategories,
  loadSolutions
} from './solutions.actions';
import {
  normalizeSolutions,
  normalizeSolutionsMaterials,
  normalizeSolutionsTools,
  normalizeSolutionsCategories
} from './solutions.normalizers';

export const initialState = {
  materials: {},
  categories: {},
  tools: {},
  solutions: []
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

const handleSolutions = (state, { payload }) => {
  return {
    ...state,
    solutions: normalizeSolutions(payload)
  };
};

export default handleActions(
  {
    [loadSolutions]: handleSolutions,
    [loadSolutionsMaterials]: handleSolutionsMaterials,
    [loadSolutionsTools]: handleSolutionsTools,
    [loadSolutionsCategories]: handleSolutionsCategories
  },
  initialState
);
