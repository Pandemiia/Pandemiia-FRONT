const normalizeHospital = ({ address, categories, description, email, id, name, region, company_code }) => {
  return {
    id,
    address,
    categories,
    description,
    email,
    name,
    region,
    companyCode: company_code
  };
};

const normalizeHospitalRegion = ({ key, name, hospitals_in_region }) => {
  return {
    id: key,
    name,
    total: hospitals_in_region
  };
};

const normalizeHospitalType = ({ id, name, related_hospitals_number }) => {
  return {
    id,
    name,
    total: related_hospitals_number
  };
};

const normalizeHospitalNeed = ({ id, name }) => {
  return {
    id,
    name
  };
};

export const normalizeHospitalRegions = ({ data = [] }) => {
  return data.reduce(
    (memo, current) => {
      const { id, ...rest } = normalizeHospitalRegion(current);

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
      const { id, ...rest } = normalizeHospitalNeed(current);

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

export const normalizeHospitals = ({ data = {} }) => {
  const { results } = data;
  return results.reduce((memo, current) => {
    const hospital = normalizeHospital(current);
    memo = [...memo, hospital];
    return memo;
  }, []);
};
