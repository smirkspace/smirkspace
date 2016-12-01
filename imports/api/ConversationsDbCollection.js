import { Mongo } from 'meteor/mongo';
import { } from 'meteor/meteor';

export const Conversations = new Mongo.Collection('conversations');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('conversations', () => Conversations.find());
}

export function spaceGen() {

  window.scrollTo(0,0);
  Meteor.subscribe('conversations');
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

  for (let i = 0; i < convo.length; i++) {
    if (convo[i].NumberInRoom === 1 && convo[i].Available === true && convo[i].Category === path) {
      Conversations.update({ _id: convo[i]._id },
        { $set: { NumberInRoom: 2, Available: false, user2: Meteor.user().username } });
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

  return instance;
}

export function resendVerif() {
  Meteor.call('resend');
  alert('Verification email resent. Please check your inbox.');
}
