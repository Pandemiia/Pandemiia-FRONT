import i18n from 'i18n';

export default value => {
  const scheme = data => ({
    label: i18n.t(data),
    value: data
  });

  if (Array.isArray(value)) {
    if (value.length >= 2) {
      const keys = Object.keys(value);
      return keys.reduce((memo, key) => {
        const item = { label: i18n.t(value[key]), value: key };
        memo.push(item);
        return memo;
      }, []);
    } else {
      return scheme(value[0]);
    }
  }

  return scheme(value);
};
