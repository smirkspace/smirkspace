// Counters for database fake doors

import { Mongo } from 'meteor/mongo';
import { } from 'meteor/meteor';

export const Counters = new Mongo.Collection('counters');


export function countHandler(buttonName) {
    // query the db for an object with the given buttonName
  const doesButtonExist = Counters.find({ buttonName }).fetch();

    // if no such object exists, create it
  if (doesButtonExist[0] === undefined) {
    Counters.insert({
      buttonName,
      numClicks: 1, //begin count at 1
    });
  } else {
    // if found, update the number of time that the button has been clicked by one
    const prevClicks = doesButtonExist[0].numClicks; // old # of clicks
    const currClicks = prevClicks + 1; // new # of clicks
    Counters.update({ _id: doesButtonExist[0]._id }, { $set: { numClicks: currClicks } });
  }
}
