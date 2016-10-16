import React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexLink, Link } from 'react-router'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import AppFrame from '../imports/ui/AppFrame';
import Splash from '../imports/ui/Splash';
import Dashboard from '../imports/ui/Dashboard';
import Space from '../imports/ui/Space';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={AppFrame}>
        <IndexRoute component={Splash} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="space" component={Space} />
      </Route>
    </Router>,
    document.getElementById('render-target')
  );
});
