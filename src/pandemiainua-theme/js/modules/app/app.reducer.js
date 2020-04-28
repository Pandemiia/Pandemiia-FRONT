import { handleActions } from 'redux-actions';

import { toggleMenu, loadHospitalRegions, loadHospitalCategories, loadHospitalNeedsCategories } from './app.actions';
import {
  normalizeHospitalRegions,
  normalizeHospitalCategories,
  normalizeHospitalNeedsCategories
} from './app.normalizers';

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

const handleHospitalCategories = (state, { payload }) => {
  return {
    ...state,
    hospitals: {
      ...state.hospitals,
      categories: normalizeHospitalCategories(payload)
    }
  };
};

const handleHospitalNeedsCategories = (state, { payload }) => {
  return {
    ...state,
    hospitals: {
      ...state.hospitals,
      categories: normalizeHospitalNeedsCategories(payload)
    }
  };
};

export default handleActions(
  {
    [toggleMenu]: handleToggleMenu,
    [loadHospitalRegions]: handleHospitalRegions,
    [loadHospitalCategories]: handleHospitalCategories,
    [loadHospitalNeedsCategories]: handleHospitalNeedsCategories
  },
  initialState
);
