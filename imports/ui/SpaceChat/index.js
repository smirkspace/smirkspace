import React, { Component } from 'react';
import { Template } from 'meteor/templating';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { Conversations, spaceGen } from '../../api/ConversationsDbCollection.js';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
//import {SimpleChats} from '../../api/SimpleChat.js';

export default class SpaceChat extends Component {

  render() {
    var space = spaceGen();
      return(
        <div className="container">

            <div className="row" >
                <div className="col-md-4">

                        <div className="box box-info direct-chat direct-chat-info">
                            <div className="box-header with-border">
                                <h3 className="box-title">Room: {space}</h3>
                                <div className="box-tools pull-right">
                                  <button className="btn btn-box-tool" data-widget="collapse">Somebody New<i className="fa fa-minus"></i>
                                  </button>
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
