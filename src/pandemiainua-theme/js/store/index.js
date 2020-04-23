import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { api } from '@pinua/api';
import thunk from './redux-thunk';
import reduxPromiseAction from './redux-promise-action';

const middlewares = [thunk({ client: api }), reduxPromiseAction(api)];

const persistConfig = {
  key: 'root',
  storage
};

export default reducers => {
  const store = createStore(
    persistCombineReducers(persistConfig, reducers),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  const persistor = persistStore(store);

  return {
    store,
    persistor
  };
};
