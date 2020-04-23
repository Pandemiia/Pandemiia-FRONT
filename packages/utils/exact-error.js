export const exactError = errors => {
  return errors && Object.entries(errors).filter(e => e[1] !== '').length !== 0;
};
