import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import AppFrame from '../imports/ui/AppFrame';
import Splash from '../imports/ui/Splash';
import Dashboard from '../imports/ui/Dashboard';
import AboutUs from '../imports/ui/AboutUs';
import SpaceFrame from '../imports/ui/SpaceFrame';
import VerifyEmail from '../imports/ui/VerifyEmail';
import ContactUs from '../imports/ui/ContactUs';
import '../imports/startup/accounts-config';
import { Conversations, UserBlurbs } from '../imports/api/ConversationsDbCollection';
import { Button } from '../imports/ui/SpaceButton';

// if the user is not logged in, redirect them to the splash page
function requireAuth(nextState, replace) {
  if (!Meteor.user()) {
    replace({
      pathname: '/splash',
      state: { nextPathname: nextState.location.pathname },
    });
  }
  /*
  } else if (!Meteor.user().emails[0].verified) {
    replace({
      pathname: '/verifyEmail',
      state: { nextPathname: nextState.location.pathname },
    });
  }
  */
}

Meteor.startup(() => {
  Meteor.subscribe('conversations');
  Meteor.subscribe('simpleChats');

  // This function decrements the number of people in the room and deletes empty rooms
  function decrementRoomNum() {
    // Check to see if the user is logged on
    if (Meteor.userId()) {
      const currentUserName = UserBlurbs.find({ username: Meteor.user().username }).fetch();

      const displayName = currentUserName[0].displayName;
      // Find all the documents in the 'simpleChats' collection that has the current logged on user
      const user1 = Conversations.find({ user1: Meteor.user().username }).fetch();
      const user2 = Conversations.find({ user2: Meteor.user().username }).fetch();
      const users = user1.concat(user2);
      // Find all the rooms
      const chatId = SimpleChat.Chats.find().fetch();
      // Find all the rooms that have the current logged
      // on user and decrement the number of people in the room
      for (let k = 0; k < users.length; k++) {
        // Display disconnect message
        if (users[k].user1 === Meteor.user().username) {
          const disconnectUser1Msg = {
            message: `${displayName} has left the chat. Click Next to talk to someone new!`,
            roomId: users[k].Id.toString(),
            username: 'Smirkspace',
            name: 'Smirkspace',
            sent: !this.isSimulation,
            receivedBy: [],
            receivedAll: false,
            viewedBy: [],
            viewedAll: false,
            userId: 1,
            date: new Date(),
          };
          disconnectUser1Msg._id = SimpleChat.Chats.insert(disconnectUser1Msg);
          SimpleChat.options.onNewMessage(disconnectUser1Msg);

          Conversations.update({ _id: users[k]._id }, { $unset: { user1: '' } });
        } else {
          const disconnectUser2Msg = {
            message: `${displayName} has left the chat. Click Next to talk to someone new!`,
            roomId: users[k].Id.toString(),
            username: 'Smirkspace',
            name: 'Smirkspace',
            sent: !this.isSimulation,
            receivedBy: [],
            receivedAll: false,
            viewedBy: [],
            viewedAll: false,
            userId: 1,
            date: new Date(),
          };
          disconnectUser2Msg._id = SimpleChat.Chats.insert(disconnectUser2Msg);
          SimpleChat.options.onNewMessage(disconnectUser2Msg);

          Conversations.update({ _id: users[k]._id }, { $unset: { user2: '' } });
        }

        if (chatId.length === 0) {
          const num = users[k].NumberInRoom;
          const newNum = num - 1;
          // If the room is now empty,
          // delete the room in both the 'conversations' and 'simpleChats' collections
          if (newNum === 0) {
            Conversations.remove({ _id: users[k]._id });
          // If the room is not empty, just update the number of people in the room
          } else {
            Conversations.update({ _id: users[k]._id }, { $set: { NumberInRoom: newNum } });
          }
        } else {
          for (let p = 0; p < chatId.length; p++) {
            if (users[k].user1 === chatId[p].username || users[k].user2 === chatId[p].username) {
              const userToRemove = SimpleChat.Chats.find({
                roomId: users[k].Id.toString() }).fetch();

              const num = users[k].NumberInRoom;
              const newNum = num - 1;

              // If the room is now empty,
              // delete the room in both the 'conversations' and 'simpleChats' collections
              if (newNum === 0) {
                for (let i = 0; i < userToRemove.length; i++) {
                  SimpleChat.Chats.remove({ _id: userToRemove[i]._id });
                }
                Conversations.remove({ _id: users[k]._id });
              // If the room is not empty, just update the number of people in the room
              } else {
                Conversations.update({ _id: users[k]._id }, { $set: { NumberInRoom: newNum } });
              }
            }
          }
        }
      }
    }
  }

  window.onunload = window.onbeforeunload = (function () {
    decrementRoomNum();
  });

  render(
    <Router history={browserHistory}>
      <Route path="/" component={AppFrame}>
        <IndexRedirect to="dashboard" />
        <Route path="splash" component={Splash} />
        <Route path="verifyEmail" component={VerifyEmail} />
        <Route path="contact-us" component={ContactUs} />
        <Route path="about-us" component={AboutUs} />
        <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
        <Route path="space" onEnter={requireAuth} component={SpaceFrame} >
          <IndexRedirect to="/dashboard" />
          <Route path=":buttonName" component={Button} onLeave={decrementRoomNum} />
        </Route>
        <Route path="*" component={Splash} />
      </Route>
    </Router>,
    document.getElementById('render-target'),
  );
});

SimpleChat.configure({
  texts: {
    loadMore: 'Load More',
    placeholder: 'Type message ...',
    button: 'send',
    join: 'Joined the',
    left: 'Left the',
    room: 'room at',

  },
  limit: 500,
  beep: false,
  showViewed: true,
  showReceived: true,
  showJoined: false,

  onNewMessage: function f() {  // both
  },
});
