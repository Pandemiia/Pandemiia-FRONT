import _get from 'lodash/get';

export const getHospital = state => state.hospitals.selected;
export const getHospitals = state => state.hospitals.hospitals;
export const getTotalHospitalsCount = state => state.hospitals.total;
export const getHospitalRegions = state => state.hospitals.regions;
export const getHospitalCategories = state => state.hospitals.categories;
export const getHospitalNeeds = state => state.hospitals.needs;

export const getDataToArray = (state, type) => {
  const data = _get(state, `hospitals.${type}`) || {};
  const { items = [] } = data;

  return items.reduce((memo, current) => {
    const { id, name, total, ...rest } = data[current];

    memo = [
      ...memo,
      {
        value: id,
        label: name,
        total,
        ...rest
      }
    ];

    return memo;
  }, []);
};

export default {
  getHospital,
  getHospitals,
  getTotalHospitalsCount,
  getHospitalRegions,
  getHospitalCategories,
  getHospitalNeeds,
  getDataToArray
};
