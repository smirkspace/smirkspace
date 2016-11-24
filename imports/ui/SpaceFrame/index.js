import React from 'react';
import { } from 'meteor/mongo';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { } from 'meteor/templating';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { Conversations, spaceGen } from '../../api/ConversationsDbCollection';
import { } from '../SpaceButton/index';
import { countHandler, Counters } from '../../api/CountersDbCollection'


export default function SpaceFrame() {
  Meteor.subscribe('conversations');
  Meteor.subscribe('simpleChats');

  const space = spaceGen();

  // This function decrents the number of people in a
  // room and deletes room if 0 people are in them
  function decrementRoomNum() {
      // Get all rooms from the 'conversations' collection
    const rooms = Conversations.find().fetch();
      // Iterate through all the rooms
    for (let i = 0; i < rooms.length; i++) {
      // If the room is equal to the current space,
      // then decrement the number of people in the room by 1
      if (rooms[i].Id === space) {
        const num = rooms[i].NumberInRoom;
        const newNum = num - 1;
        // If the new number in the room is 0,
        // then delete that room from both the 'conversations' Collection
        // and the 'simpleChats' collection
        if (newNum === 0) {
          const id = SimpleChat.Chats.find({ roomId: rooms[i].Id.toString() }).fetch();
          for (let j = 0; j < id.length; j++) {
            SimpleChat.Chats.remove({ _id: id[j]._id });
          }
          Conversations.remove({ _id: rooms[i]._id });
        } else {
          // If the new number in the room is not 0,
          // the just update the number of people in the room
          Conversations.update({ _id: rooms[i]._id }, { $set: { NumberInRoom: newNum } });
        }
      }
    }
  }

    // This gets called on logout
  accountsUIBootstrap3.logoutCallback = function () {
      // decrement the room number and delete empty rooms when the user logs out
    decrementRoomNum();
  };

  function reportPopup() {
    countHandler("reportUser");
    alert('The report function is still in development.\nIf you have a claim please email us at smirkspace@gmail.com');
  }

  function videoPopup() {
    countHandler("startVideoChat");
    alert('The video-chat function is still in development.\nCheck back soon!');
  }

  function topic() {
    const convoTopic = Conversations.find({ Id: space }).fetch();
    return convoTopic[0].Category;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-sm-offset-4">
          <h3 style={{ color: 'white' }}>Conversation topic: {topic()}</h3>
        </div>
      </div>
      <div className="row">
        <div className=" col-md-8 col-md-offset-2" >
          <div className="box box-info direct-chat direct-chat-info">
            <div className="box-header with-border">
              <h3 className="box-title">Room ID: {space}</h3>
              <div className="box-tools">
                <button className="btn btn-danger" onClick={reportPopup}>Report User</button>
                <button type="button" className="btn btn-success btn-lg" onClick={videoPopup}><span className="glyphicon glyphicon-facetime-video" /> Start Video Chat</button>
                <Link to="/space/travel"><button className="btn btn-primary" onClick={decrementRoomNum}>Next Conversation</button></Link>
              </div>
              <br /><br />
            </div>
            <div>
              <Blaze template="SimpleChatWindow" roomId={space} username={Meteor.user().username} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
