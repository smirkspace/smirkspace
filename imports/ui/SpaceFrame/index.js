import React from 'react';
import { } from 'meteor/mongo';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { } from 'meteor/templating';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { Conversations, spaceGen, UserBlurbs } from '../../api/ConversationsDbCollection';
import { } from '../SpaceButton/index';
import { countHandler } from '../../api/CountersDbCollection';
import '../../../client/styles/simpleChatStyleOverwrite.css';

export default function SpaceFrame() {
  Meteor.subscribe('conversations');
  Meteor.subscribe('simpleChats');

  const space = spaceGen();

  const currentUserName = UserBlurbs.find({ username: Meteor.user().username }).fetch();

  const displayName = currentUserName[0].displayName;

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
        // Display disconnect message
        if (rooms[i].user1 === Meteor.user().username) {
          const disconnectUser1Msg = {
            message: `${displayName} has left the chat. Click Next to talk to someone new!`,
            roomId: space.toString(),
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

          Conversations.update({ _id: rooms[i]._id }, { $unset: { user1: '' } });
        } else {
          const disconnectUser2Msg = {
            message: `${displayName} has left the chat. Click Next to talk to someone new!`,
            roomId: space.toString(),
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

          Conversations.update({ _id: rooms[i]._id }, { $unset: { user2: '' } });
        }
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
    countHandler('reportUser');
    alert('The report function is still in development.\nIf you have a claim please email us at smirkspace@gmail.com');
  }

  function videoPopup() {
    countHandler('startVideoChat');
    alert('The video-chat function is still in development.\nCheck back soon!');
  }

  function topic() {
    const convoTopic = Conversations.find({ Id: space }).fetch();
    return convoTopic[0].Category;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1 title-div">
          <div className="topic-title">You are now talking about {topic()}                                                                                                                           <span className="glyphicon glyphicon-thumbs-up" /></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 col-md-offset-1" >
          <div className="box box-info direct-chat direct-chat-info">
            <div className="box-header with-border">
              <button className="btn btn-danger report-button" onClick={reportPopup}><span className="glyphicon glyphicon-minus-sign" /> Report</button>
              <button type="button" className="btn btn-success video-button" onClick={videoPopup}><span className="glyphicon glyphicon-facetime-video" /> Start Video Chat</button>
              <Link to={`/space/${topic()}`}><button className="btn btn-primary next-button" onClick={decrementRoomNum}><span className="glyphicon glyphicon-circle-arrow-right" /> Next</button></Link>
            </div>
            <div>
              <Blaze template="SimpleChatWindow" roomId={space} username={Meteor.user().username} name={displayName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
