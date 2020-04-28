import React, { useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './pages.config';

/** ROUTES **/
import NotFound from './404';

const Pages = ({ ...props }) => {
  const getRoutes = useCallback((route, idx) => (
    <Route key={`rout-${idx}-${route.name}`} exact path={route.path} component={route.component} />
  ));

  const navRoutes = routes.map(getRoutes);

  return (
    <Switch>
      {navRoutes}
      <Route render={props => <NotFound {...props} />} />
    </Switch>
  );
};

export default Pages;
