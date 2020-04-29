import React, { useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './pages.config';

/** ROUTES **/
import NotFound from './404';

const Pages = ({ ...props }) => {
  const getRoutes = useCallback(
    (route, idx) => <Route key={`rout-${idx}-${route.name}`} exact path={route.path} component={route.component} />,
    []
  );

  const renderRoute = useCallback(props => <NotFound {...props} />, []);

  const navRoutes = routes.map(getRoutes);

  return (
    <Switch>
      {navRoutes}
      <Route render={renderRoute} />
    </Switch>
  );
};

export default Pages;
