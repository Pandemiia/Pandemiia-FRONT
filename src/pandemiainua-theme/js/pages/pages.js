import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './pages.config';

/** ROUTES **/
import NotFound from './404';

export default class Pages extends PureComponent {
  getRoutes = (route, idx) => (
    <Route key={`rout-${idx}-${route.name}`} exact path={route.path} component={route.component} />
  );

  render() {
    const navRoutes = routes.map(this.getRoutes);

    return (
      <Switch>
        {navRoutes}
        <Route render={props => <NotFound {...props} />} />
      </Switch>
    );
  }
}
