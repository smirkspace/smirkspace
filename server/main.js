import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
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
  showJoined: true,
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

Meteor.methods({
  'resend': function () {
    const id = Meteor.user()._id;
    Accounts.sendVerificationEmail(id);
    console.log('verification email sent');
    return true;
  },
});

Accounts.config({
  sendVerificationEmail: true,
});

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL = 'smtp://postmaster%40smirkspace.com:d8653b6e85794a852ac1ac62b6eec159@smtp.mailgun.org:587';


  // Set the from address
  Accounts.emailTemplates.from = 'support@smirkspace.com';

  // Application name
  Accounts.emailTemplates.siteName = 'SmirkSpace';

  // Subject line of the email.
  Accounts.emailTemplates.verifyEmail.subject = function () {
    return 'Confirm Your Email Address for SmirkSpace';
  };

  Accounts.emailTemplates.verifyEmail.html = function (user, url) {
    return `<h1>Welcome to SmirkSpace!</h1></br></br> <p>You are moments away from sharing real conversations with users just like you!</p></br><p>Click the button below to verify your account,</p></br><button type="button"><a href="${url}">Verify eMail</a></button>`;
  };
});
