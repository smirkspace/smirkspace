import { Mongo } from 'meteor/mongo';
import { } from 'meteor/meteor';

export const Conversations = new Mongo.Collection('conversations');

// Create random room Id number
let instance = Math.floor(Math.random() * 1000000);
export function spaceGen() {
  // Assign the db items to a variable
  const test = Conversations.find().fetch();

  for (let i = 0; i < test.length; i += 1) {
    if (test[i].NumberInRoom === 1) {
      Conversations.update({ _id: test[i]._id }, { $set: { NumberInRoom: 2, Available: false } });
      return test[i].Id;
    }
  }

  // go through db items to make sure Id is unique
  for (let i = 0; i < test.length; i += 1) {
    if (test[i].Id === instance) {
      instance = Math.floor(Math.random() * 1000000);
      // continue;
    }
  }

  Conversations.insert({
    Category: 'Travel',
    NumberInRoom: 1,
    Id: instance,
    Available: true,
  });

  return instance;
}
