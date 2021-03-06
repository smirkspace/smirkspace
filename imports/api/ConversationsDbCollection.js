import { Mongo } from 'meteor/mongo';
import { } from 'meteor/meteor';

export const UserBlurbs = new Mongo.Collection('userblurbs');


export function updateUserBlurb(myBlurb, myDisplayName) {
  const currentUserName = UserBlurbs.find({ username: Meteor.user().username }).fetch();

  if (currentUserName[0] === undefined) {
    UserBlurbs.insert({
      blurb: myBlurb,
      username: Meteor.user().username,
      displayName: myDisplayName,
    });
  } else {
    UserBlurbs.update({ _id: currentUserName[0]._id }, {
      $set: {
        blurb: myBlurb,
        displayName: myDisplayName,
      },
    });
  }
}

export const Conversations = new Mongo.Collection('conversations');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('conversations', () => Conversations.find());
}

Meteor.users.allow({
  update(userId, doc, fields, modifier, profile) {
    return userId === doc.userId;
  },
});

export function spaceGen() {
  window.scrollTo(0, 0);
  Meteor.subscribe('conversations');
  Meteor.subscribe('simpleChats');
  const url = window.location.href;
  let index = url.length - 1;
  let char = url[index];
  let path = '';

  while (char !== '/') {
    path = char.concat(path);
    index -= 1;
    char = url[index];
  }
  // Assign the db items to a variable
  const convo = Conversations.find().fetch();
  const blurb = UserBlurbs.find({ username: Meteor.user().username }).fetch();

  for (let i = 0; i < convo.length; i++) {
    if (convo[i].NumberInRoom === 1 && convo[i].Available === true && convo[i].Category === path) {
      Conversations.update({ _id: convo[i]._id },
        { $set: { NumberInRoom: 2, Available: false, user2: Meteor.user().username } });
      const msg = {
        message: `${`Hi, I'm ${blurb[0].displayName}!` + '<br>'}${blurb[0].blurb}`,
        roomId: convo[i].Id.toString(),
        username: Meteor.user().username,
        name: blurb[0].displayName,
        sent: !this.isSimulation,
        receivedBy: [],
        receivedAll: false,
        viewedBy: [],
        viewedAll: false,
        userId: Meteor.user()._id,
        date: new Date(),
      };
      msg._id = SimpleChat.Chats.insert(msg);
      SimpleChat.options.onNewMessage(msg);

      const waiting = SimpleChat.Chats.find({ message: '...Waiting for another user...', roomId: convo[i].Id.toString() }).fetch();
      SimpleChat.Chats.remove({ _id: waiting[0]._id });
      return convo[i].Id;
    }
  }

  let instance = Math.floor(Math.random() * 1000000);

  // go through db items to make sure Id is unique
  for (let i = 0; i < convo.length; i += 1) {
    if (convo[i].Id === instance) {
      instance = Math.floor(Math.random() * 1000000);
      // continue;
    }
  }

  Conversations.insert({
    Category: path,
    NumberInRoom: 1,
    Id: instance,
    Available: true,
    user1: Meteor.user().username,
  });

  const msg2 = {
    message: `${`Hi, I'm ${blurb[0].displayName}!` + '<br>'}${blurb[0].blurb}`,
    roomId: instance.toString(),
    username: Meteor.user().username,
    name: blurb[0].displayName,
    sent: !this.isSimulation,
    receivedBy: [],
    receivedAll: false,
    viewedBy: [],
    viewedAll: false,
    userId: Meteor.user()._id,
    date: new Date(),
  };
  msg2._id = SimpleChat.Chats.insert(msg2);
  SimpleChat.options.onNewMessage(msg2);

  const waitingMsg = {
    message: '...Waiting for another user...',
    roomId: instance.toString(),
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
  waitingMsg._id = SimpleChat.Chats.insert(waitingMsg);
  SimpleChat.options.onNewMessage(waitingMsg);

  return instance;
}

export function resendVerif() {
  Meteor.call('resend');
  alert('Verification email resent. Please check your inbox.');
}

export function percentInSpace(buttonName) {
  const convo = Conversations.find({}).fetch();
  let allRooms = 0;
  let spaceRooms = 0;

  for (let i = 0; i < convo.length; i++) {
    allRooms += convo[i].NumberInRoom;

    if (convo[i].Category === buttonName) {
      spaceRooms += convo[i].NumberInRoom;
    }
  }

  if (allRooms === 0) {
    return 'Population: Less than 10%';
  }

  const percent = (spaceRooms / allRooms) * 100;
  console.log(percent);
  if (percent > 90) {
    return 'Population: Greater than 90%';
  } else if (percent < 10) {
    return 'Population: Less than 10%';
  } else {
    return `Population: ${percent}% of users`;
  }
}
