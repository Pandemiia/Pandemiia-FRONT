import { createAction } from 'redux-actions';
import { stringify } from '@pinua/utils';

export const loadHospitalRegions = createAction('LOAD_HOSPITAL_REGIONS', () => ({ client }) => {
  return client.get('/hospitals/regions/');
});

export const loadHospitalTypes = createAction('LOAD_HOSPITAL_TYPES', () => ({ client }) => {
  return client.get('/hospitals/categories/');
});

export const loadHospitalNeedsCategories = createAction('LOAD_HOSPITAL_NEEDS_CATEGORIES', () => ({ client }) => {
  return client.get('/hospitals/needs_categories/');
});

export const loadHospitals = createAction('LOAD_HOSPITALS', ({ regions, types } = {}) => ({ client }) => {
  return client.get(`/hospitals/?${stringify({ region: regions, categories_in: types })}`);
});

export default {
  loadHospitalRegions,
  loadHospitalTypes,
  loadHospitals,
  loadHospitalNeedsCategories
};
