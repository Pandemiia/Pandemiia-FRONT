import { handleActions } from 'redux-actions';
import _get from 'lodash/get';
import {
  loadHospitalRegions,
  loadHospitalTypes,
  loadHospitalNeedsCategories,
  loadHospitals,
  loadHospital
} from './hospitals.actions';
import {
  normalizeHospital,
  normalizeHospitals,
  normalizeHospitalRegions,
  normalizeHospitalTypes,
  normalizeHospitalNeedsCategories
} from './hospitals.normalizers';

export const initialState = {
  regions: {},
  types: {},
  needs: {},
  hospitals: [],
  selected: {}
};

const handleHospitalRegions = (state, { payload }) => {
  return {
    ...state,
    regions: normalizeHospitalRegions(payload)
  };
};

const handleHospitalTypes = (state, { payload }) => {
  return {
    ...state,
    types: normalizeHospitalTypes(payload)
  };
};

const handleHospitalNeedsCategories = (state, { payload }) => {
  return {
    ...state,
    needs: normalizeHospitalNeedsCategories(payload)
  };
};

const handleHospitals = (state, { payload }) => {
  const results = _get(payload, 'data.results', []);
  const count = _get(payload, 'data.count', 0);
  return {
    ...state,
    hospitals: normalizeHospitals(results),
    total: count
  };
};

const handleHospital = (state, { payload = {} }) => {
  const { data } = payload;
  return {
    ...state,
    selected: normalizeHospital(data)
  };
};

export default handleActions(
  {
    [loadHospital]: handleHospital,
    [loadHospitals]: handleHospitals,
    [loadHospitalRegions]: handleHospitalRegions,
    [loadHospitalTypes]: handleHospitalTypes,
    [loadHospitalNeedsCategories]: handleHospitalNeedsCategories
  },
  initialState
);
