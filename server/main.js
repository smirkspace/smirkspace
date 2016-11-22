import { Meteor } from 'meteor/meteor';
import '../imports/api/ConversationsDbCollection';

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
  beep: true,
  showViewed: true,
  showReceived: true,
  showJoined: false,
  publishChats: function f1() { // server
  // here the context is the same for a Publications,
  // that mean you have access to this.userId who are asking for subscribe.
  // for example
  // This isn't working because isLoggedAndHasAccessToSeeMessage is not
  // defined. We can define it ourselves, but right now we're returning true
  // return isLoggedAndHasAccessToSeeMessage(this.userId)
    return true;
  },
  allow: function f2() {
  // here the context is the same for a Methods, thats mean you hace access to this.userId also
  // for example
  // This isn't working because isLoggedAndHasAccessToSeeMessage is not
  // defined. We can define it ourselves, but right now we're returning true
  // return isLoggedAndHasAccessSendMessages(this.userId)
    return true;
  },
  onNewMessage: function f2() {  // both
  },
  onReceiveMessage: function f3() { // server
  },
  onJoin: function f4() {  // server
  },
  onLeft: function f5() { // server
  },
});


Meteor.startup(() => {
  // code to run on server at startup
});
