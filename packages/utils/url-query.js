import queryString from 'query-string';
import forEach from 'lodash/forEach';

export const parse = (query, schema) => {
  const params = queryString.parse(query, { arrayFormat: 'bracket' });

  if (!schema) {
    return params;
  }

  forEach(schema, (value, key) => {
    if (value === 'number[]' && params[key] instanceof Array) {
      params[key] = params[key].map(i => parseInt(i, 10));
    }
    if (value === 'string[]' && params[key]) {
      params[key] = params[key] instanceof Array ? params[key] : [params[key]];
    }
    if (value === 'csv' && params[key]) {
      params[key] = params[key].split(',');
    }
    if (value === 'number' && params[key]) {
      params[key] = parseInt(params[key], 10);
    }
  });

  return params;
};

export const stringify = params => {
  return queryString.stringify(params, { arrayFormat: 'comma' });
};
