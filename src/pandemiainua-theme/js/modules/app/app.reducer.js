import { handleActions } from 'redux-actions';

import { toggleMenu, loadHospitalRegions, loadHospitalTypes, loadHospitalNeedsCategories } from './app.actions';
import { normalizeHospitalRegions, normalizeHospitalTypes, normalizeHospitalNeedsCategories } from './app.normalizers';

export const initialState = {
  menuOpen: false,
  hospitals: {
    regions: {},
    categories: {},
    needs: {}
  }
};

const handleToggleMenu = (state, { payload }) => {
  return {
    ...state,
    menuOpen: payload
  };
};

const handleHospitalRegions = (state, { payload }) => {
  return {
    ...state,
    hospitals: {
      ...state.hospitals,
      regions: normalizeHospitalRegions(payload)
    }
  };
};

const handleHospitalTypes = (state, { payload }) => {
  return {
    ...state,
    hospitals: {
      ...state.hospitals,
      categories: normalizeHospitalTypes(payload)
    }
  };
};

const handleHospitalNeedsCategories = (state, { payload }) => {
  return {
    ...state,
    hospitals: {
      ...state.hospitals,
      needs: normalizeHospitalNeedsCategories(payload)
    }
  };
};

export default handleActions(
  {
    [toggleMenu]: handleToggleMenu,
    [loadHospitalRegions]: handleHospitalRegions,
    [loadHospitalTypes]: handleHospitalTypes,
    [loadHospitalNeedsCategories]: handleHospitalNeedsCategories
  },
  initialState
);
