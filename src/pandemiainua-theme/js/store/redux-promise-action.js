export default client => store => {
  const { dispatch, getState } = store;
  client.store = store;

  return next => action => {
    if (!action.payload || typeof action.payload !== 'function') {
      return next(action);
    }

    const { payload, ...restAction } = action;

    return (async () => {
      try {
        const result = await payload({ client, dispatch, getState });

        dispatch({
          ...restAction,
          payload: result
        });

        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    })();
  };
};
