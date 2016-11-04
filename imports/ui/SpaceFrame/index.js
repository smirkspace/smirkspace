import React, { Component } from 'react';
import { Template } from 'meteor/templating';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { Conversations, spaceGen } from '../../api/ConversationsDbCollection.js';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router'
import { Button } from '../SpaceButton/index.js'

export default class SpaceFrame extends Component {

  render() {
    var space = spaceGen();

    function reportPopup() {
      alert("The report function is still in development.\nIf you have a claim please email us at smirkspace@gmail.com");
    }

    function videoPopup() {
      alert("The vide-chat function is still in development.\nCheck back soon!");
    }

    return(
      <div className="container">
          <div className="row">
            <div className='col-sm-12 col-sm-offset-4'>
              <h3 style={{color: 'white'}}>Conversation topic: travel</h3>
            </div>
          </div>
          <div className="row">
              <div className=" col-md-8 col-md-offset-2" >
                      <div className="box box-info direct-chat direct-chat-info">
                          <div className="box-header with-border">
                            <h3 className='box-title'>Room ID: {space}</h3>
                              <div className="box-tools">
                                <button className='btn btn-danger' onClick={reportPopup}>Report User</button>
                                <button type="button" className="btn btn-success btn-lg" onClick={videoPopup}><span className="glyphicon glyphicon-facetime-video"></span> Start Video Chat</button>
                                <Link to="/space/travel"><button className='btn btn-primary'>Next Conversation</button></Link>
                              </div>
                              <br></br><br></br>
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
