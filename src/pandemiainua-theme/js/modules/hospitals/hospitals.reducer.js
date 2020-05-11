import { handleActions } from 'redux-actions';

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
  return {
    ...state,
    hospitals: normalizeHospitals(payload)
  };
};

const handleHospital = (state, { payload }) => {
  return {
    ...state,
    selected: normalizeHospital(payload)
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
