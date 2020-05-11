import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { api } from '@pinua/api';
import thunk from './redux-thunk';
import reduxPromiseAction from './redux-promise-action';

const middlewares = [thunk({ client: api }), reduxPromiseAction(api)];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({ collapsed: true }));
}

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
