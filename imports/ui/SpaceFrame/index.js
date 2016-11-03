import React, { Component } from 'react';
import { Template } from 'meteor/templating';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { Conversations, spaceGen } from '../../api/ConversationsDbCollection.js';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router'

export default class SpaceFrame extends Component {

  render() {
    var space = spaceGen();

    function reportPopup() {
      alert("The report function is still in development.\nIf you have a claim please email us at smirkspace@gmail.com");
    }

    return(
      <div className="container">

          <div className="row" >
              <div className=" col-md-8 col-md-offset-2" >

                      <div className="box box-info direct-chat direct-chat-info">
                          <div className="box-header with-border">
                              <h3 className="box-title">Room: {space}</h3>
                              <div className="box-tools pull-right">
                                <button className='btn btn-danger' onClick={reportPopup}>Report User</button>
                                <Link to="/space/travel"><button className='btn btn-primary'>Next Conversation</button></Link>
                              </div>
                          </div>
                          <div>
                            <Blaze template="SimpleChatWindow" roomId={space} username={Meteor.user().username}/>
                          </div>
                      </div>
              </div>
          </div>
      </div>
    );
  }
}
