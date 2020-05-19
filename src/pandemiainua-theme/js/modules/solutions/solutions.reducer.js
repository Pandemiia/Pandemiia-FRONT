import { handleActions } from 'redux-actions';
import _get from 'lodash/get';
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
  const results = _get(payload, 'data.results', []);
  const count = _get(payload, 'data.count', 0);

  return {
    ...state,
    solutions: normalizeSolutions(results),
    total: count
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
