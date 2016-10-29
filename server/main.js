import { Meteor } from 'meteor/meteor';

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
       //This isn't working because isLoggedAndHasAccessToSeeMessage is not defined. We can define it ourselves, but right now we're returning true
       //return isLoggedAndHasAccessToSeeMessage(this.userId)
       return true
    },
    allow: function(message, roomId, username, avatar, name){
       //here the context is the same for a Methods, thats mean you hace access to this.userId also
       // for example
       //This isn't working because isLoggedAndHasAccessToSeeMessage is not defined. We can define it ourselves, but right now we're returning true
       //return isLoggedAndHasAccessSendMessages(this.userId)
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
});


Meteor.startup(() => {
  // code to run on server at startup
});
