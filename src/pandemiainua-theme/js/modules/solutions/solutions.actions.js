import { createAction } from 'redux-actions';

export const loadSolutionsMaterials = createAction('LOAD_SOLUTIONS_MATERIALS', () => ({ client }) => {
  return client.get('/solutions/materials/');
});

export const loadSolutionsCategories = createAction('LOAD_SOLUTIONS_CATEGORIES', () => ({ client }) => {
  return client.get('/solutions/categories/');
});

export const loadSolutionsTools = createAction('LOAD_SOLUTIONS_TOOLS', () => ({ client }) => {
  return client.get('/solutions/tools/');
});

export default {
  loadSolutionsMaterials,
  loadSolutionsTools,
  loadSolutionsCategories
};
