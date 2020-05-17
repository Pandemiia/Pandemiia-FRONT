import { createAction } from 'redux-actions';
import { stringify } from '@pinua/utils';

export const loadSolutionsMaterials = createAction('LOAD_SOLUTIONS_MATERIALS', () => ({ client }) => {
  return client.get('/solutions/materials/');
});

export const loadSolutionsCategories = createAction('LOAD_SOLUTIONS_CATEGORIES', () => ({ client }) => {
  return client.get('/solutions/categories/');
});

export const loadSolutionsTools = createAction('LOAD_SOLUTIONS_TOOLS', () => ({ client }) => {
  return client.get('/solutions/tools/');
});

export const loadSolutions = createAction(
  'LOAD_SOLUTIONS',
  ({ categories, materials, tools, page } = {}) => ({ client }) => {
    return client.get(`/solutions/?${stringify({ solution_type: categories, materials, tools, page })}`);
  }
);

export default {
  loadSolutions,
  loadSolutionsMaterials,
  loadSolutionsTools,
  loadSolutionsCategories
};
