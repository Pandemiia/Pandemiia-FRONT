export const normalizeLogin = ({ key, user = {} }) => {
  const { id, email } = user;
  return {
    token: key,
    id,
    email
  };
};
