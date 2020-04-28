import { createAction } from 'redux-actions';

export const toggleMenu = createAction('TOGGLE_MENU', open => open);

export const loadHospitalRegions = createAction('LOAD_HOSPITAL_REGIONS', () => ({ client }) => {
  return client.get('/hospitals/regions');
});

export const loadHospitalCategories = createAction('LOAD_HOSPITAL_CATEGORIES', () => ({ client }) => {
  return client.get('/hospitals/categories');
});

export const loadHospitalNeedsCategories = createAction('LOAD_HOSPITAL_NEEDS_CATEGORIES', () => ({ client }) => {
  return client.get('/hospitals/needs_categories');
});

export default {
  toggleMenu,
  loadHospitalRegions,
  loadHospitalCategories,
  loadHospitalNeedsCategories
};
