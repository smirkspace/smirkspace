import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexLink, Link } from 'react-router'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import AppFrame from '../imports/ui/AppFrame';
import Splash from '../imports/ui/Splash';
import Dashboard from '../imports/ui/Dashboard';
import Space from '../imports/ui/Space';

import '../imports/startup/accounts-config.js';

// if the user is not logged in, redirect them to the splash page
function requireAuth(nextState, replace) {
  if (!Meteor.user()) {
    replace({
      pathname: '/splash',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={AppFrame}>
        <IndexRedirect to="dashboard" />
        <Route path="splash" component={Splash} />
        <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
        <Route path="space" component={Space} onEnter={requireAuth} />
      </Route>
    </Router>,
    document.getElementById('render-target')
  );
});