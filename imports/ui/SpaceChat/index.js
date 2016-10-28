import React, { Component } from 'react';
import { Template } from 'meteor/templating';
import Blaze from 'meteor/gadicc:blaze-react-component';



SimpleChat.configure({
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
    
    allow: function(message, roomId, username, avatar, name){
       //here the context is the same for a Methods, thats mean you hace access to this.userId also
       // for example
       return isLoggedAndHasAccessSendMessages(this.userId)
        return true
    },
    onNewMessage:function(msg){  //both
    }

})


export default class SpaceChat extends Component {



render() {
    return(
      <div class="container">

          <div class="row" >
              <div class=" col-md-8 col-md-offset-2" >

                      <div class="box box-info direct-chat direct-chat-info">
                          <div class="box-header with-border">
                              <h3 class="box-title">Room: test</h3>
                              <div class="box-tools pull-right">
                                <button class="btn btn-box-tool" data-widget="collapse">Somebody New<i class="fa fa-minus"></i>
                                </button>
                              </div>
                          </div>
                          <Blaze template="SimpleChatWindow" roomId={"test"} username={"testUser"}/>
                      </div>

              </div>
          </div>


          </div>
    );
  }
}




/*<div>
  <header className="intro">
    <div className="intro-body">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1 className="brand-heading">Space</h1>
            <p className="intro-text">Helping you connect with students near you!<br />Find your space.</p>
            <br /><br /><br />
          </div>
        </div>
      </div>
    </div>
  </header>
</div>*/
