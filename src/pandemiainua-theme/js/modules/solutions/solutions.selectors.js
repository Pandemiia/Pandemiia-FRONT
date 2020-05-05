import _get from 'lodash/get';

export const getSolutions = state => state.solutions.solutions;
export const getSolutionsCategories = state => state.solutions.categories;
export const getSolutionsMaterials = state => state.solutions.materials;
export const getSolutionsTools = state => state.hospitals.tools;

export const getDataToArray = (state, type) => {
  const data = _get(state, `solutions.${type}`) || {};
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
  getSolutions,
  getSolutionsCategories,
  getSolutionsMaterials,
  getSolutionsTools,
  getDataToArray
};
