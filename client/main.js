import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexLink, Link } from 'react-router'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import AppFrame from '../imports/ui/AppFrame';
import Splash from '../imports/ui/Splash';
import Dashboard from '../imports/ui/Dashboard';
import SpaceFrame from '../imports/ui/SpaceFrame';

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
        <Route path="space" onEnter={requireAuth} >


        <IndexRedirect to="/dashboard" />
          <Route path="travel" component={SpaceFrame}/>
        </Route>

        <Route path='*' component={Splash} />
      </Route>
    </Router>,
    document.getElementById('render-target')
  );
});




SimpleChat.configure ({
    texts:{
        loadMore: 'Load More',
        placeholder: 'Type message ...',
        button: 'send',
        join: 'Join to',
        left: 'Left the',
        room: 'room at'

    },
    limit: 5,
    beep: true,
    showViewed: true,
    showReceived: true,
    showJoined: true,
    publishChats: function(roomId, limi){ //server
       //here the context is the same for a Publications, that mean you have access to this.userId who are asking for subscribe.
       // for example
       return isLoggedAndHasAccessToSeeMessage(this.userId)
    },
    allow: function(message, roomId, username, avatar, name){
       //here the context is the same for a Methods, thats mean you hace access to this.userId also
       // for example
       return isLoggedAndHasAccessSendMessages(this.userId)
        return true
    },
    onNewMessage:function(msg){  //both
    },
    onReceiveMessage:function(id, message, room){ //server

    },
    onJoin:function(roomId, username, name,date){  //server
    },
    onLeft:function(roomId, username, name,date) { //server
    }
})
