import { createAction } from 'redux-actions';
import { stringify } from '@pinua/utils';

export const loadHospitalRegions = createAction('LOAD_HOSPITAL_REGIONS', () => ({ client }) => {
  return client.get('/hospitals/regions/');
});

export const loadHospitalTypes = createAction('LOAD_HOSPITAL_TYPES', () => ({ client }) => {
  return client.get('/hospitals/categories/');
});

export const loadHospitalNeedsCategories = createAction('LOAD_HOSPITAL_NEEDS_CATEGORIES', () => ({ client }) => {
  return client.get('/hospitals/needs-categories/');
});

export const loadHospitals = createAction('LOAD_HOSPITALS', ({ regions, types, needs, page } = {}) => ({ client }) => {
  return client.get(`/hospitals/?${stringify({ region: regions, categories: types, needs_categories: needs, page })}`);
});

export const loadHospital = createAction('LOAD_HOSPITAL', id => ({ client }) => {
  return client.get(`/hospitals/${id}/`);
});

export default {
  loadHospitalRegions,
  loadHospitalTypes,
  loadHospitals,
  loadHospital,
  loadHospitalNeedsCategories
};
