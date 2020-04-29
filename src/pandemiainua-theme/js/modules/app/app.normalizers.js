const normalizeHospitalRegion = ({ key, name, hospitals_in_region }) => {
  return {
    key,
    name,
    total: hospitals_in_region
  };
};

const normalizeHospitalType = ({ id, name, related_hospitals_number }) => {
  return {
    id,
    name,
    related_hospitals_number
  };
};

const normalizeHospitalCategory = ({ id, name }) => {
  return {
    id,
    name
  };
};

export const normalizeHospitalRegions = ({ data }) => {
  return data.reduce(
    (memo, current) => {
      const { key, ...rest } = normalizeHospitalRegion(current);

      const { items } = memo;
      memo[key] = {
        key,
        ...rest
      };
      memo.items = [...items, key];

      return memo;
    },
    {
      items: []
    }
  );
};

export const normalizeHospitalTypes = ({ data }) => {
  return data.reduce(
    (memo, current) => {
      const { id, ...rest } = normalizeHospitalType(current);

      const { items } = memo;
      memo[id] = {
        id,
        ...rest
      };
      memo.items = [...items, id];

      return memo;
    },
    {
      items: []
    }
  );
};

export const normalizeHospitalNeedsCategories = ({ data }) => {
  return data.reduce(
    (memo, current) => {
      const { id, ...rest } = normalizeHospitalCategory(current);

      const { items } = memo;
      memo[id] = {
        id,
        ...rest
      };
      memo.items = [...items, id];

      return memo;
    },
    {
      items: []
    }
  );
};
