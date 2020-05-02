const normalizeMaterial = ({ id, name }) => {
  return {
    id,
    name
  };
};

const normalizeTool = ({ id, name }) => {
  return {
    id,
    name
  };
};

const normalizeCategory = ({ id, name }) => {
  return {
    id,
    name
  };
};

export const normalizeSolutionsMaterials = ({ data }) => {
  return data.reduce(
    (memo, current) => {
      const { id, ...rest } = normalizeMaterial(current);

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

export const normalizeSolutionsTools = ({ data }) => {
  return data.reduce(
    (memo, current) => {
      const { id, ...rest } = normalizeTool(current);

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

export const normalizeSolutionsCategories = ({ data }) => {
  return data.reduce(
    (memo, current) => {
      const { id, ...rest } = normalizeCategory(current);

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
