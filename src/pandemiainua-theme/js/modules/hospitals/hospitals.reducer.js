import { handleActions } from 'redux-actions';

import {
  loadHospitalRegions,
  loadHospitalTypes,
  loadHospitalNeedsCategories,
  loadHospitals
} from './hospitals.actions';
import {
  normalizeHospitals,
  normalizeHospitalRegions,
  normalizeHospitalTypes,
  normalizeHospitalNeedsCategories
} from './hospitals.normalizers';

export const initialState = {
  regions: {},
  types: {},
  needs: {},
  hospitals: []
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

export default handleActions(
  {
    [loadHospitals]: handleHospitals,
    [loadHospitalRegions]: handleHospitalRegions,
    [loadHospitalTypes]: handleHospitalTypes,
    [loadHospitalNeedsCategories]: handleHospitalNeedsCategories
  },
  initialState
);
