import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './components';
import { reducers } from './modules';
import mainStore from './store';
import { Pages, routes } from './pages';

import './main.scss';

const { store, persistor } = mainStore(reducers);

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

const links = routes.filter(route => route.name);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App store={store} links={links}>
          <Pages />
        </App>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
