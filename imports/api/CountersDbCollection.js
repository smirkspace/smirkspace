//Counters for database fake doors

import { Mongo } from 'meteor/mongo';
import { } from 'meteor/meteor';

export const Counters = new Mongo.Collection('counters');


export function countHandler(buttonName) {

    //query the db for an object with the given buttonName
    var doesButtonExist = Counters.find({buttonName: buttonName}).fetch();

    //if no such object exists, create it
    if (doesButtonExist[0] == undefined) {
        Counters.insert({
            buttonName: buttonName,
            numClicks: 1, //begin count at 1
        });
    }
    //if found, update the number of time that the button has been clicked by one
    else {
        var prevClicks = doesButtonExist[0].numClicks; //old # of clicks
        var currClicks = prevClicks + 1; //new # of clicks
        Counters.update({_id: doesButtonExist[0]._id}, {$set: {numClicks: currClicks}})
    }
}
