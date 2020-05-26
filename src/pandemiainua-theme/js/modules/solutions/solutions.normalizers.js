const normalizeSolution = ({
  id,
  solution_type,
  code,
  name,
  definition,
  need_description,
  images,
  main_image,
  attachment,
  manufacturing_options,
  instruction,
  materials,
  tools,
  source,
  comment,
  approved_by
}) => {
  return {
    id,
    name,
    definition,
    description: need_description,
    solutionType: solution_type,
    code,
    mainImage: main_image,
    images,
    attachment,
    manufacturingOptions: manufacturing_options,
    instruction,
    materials,
    tools,
    source,
    comment,
    approvedBy: approved_by
  };
};

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

export const normalizeSolutions = (data = []) => {
  return data.reduce((memo, current) => {
    const id = memo.length;
    const solution = normalizeSolution({ ...current, id });
    memo = [...memo, solution];
    return memo;
  }, []);
};
