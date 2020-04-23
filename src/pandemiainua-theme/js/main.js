import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './components';
import { reducers } from './modules';
import mainStore from './store';
import { Pages } from './pages';

import './main.css';

const { store, persistor } = mainStore(reducers);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App store={store}>
          <Pages />
        </App>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
