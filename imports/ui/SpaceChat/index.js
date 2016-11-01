import React, { Component } from 'react'
import { Template } from 'meteor/templating'
import Blaze from 'meteor/gadicc:blaze-react-component'

export default class SpaceChat extends Component {
  render () {
    return (
      <div className="container">
          <div className="row" >
              <div className=" col-md-8 col-md-offset-2" >
                <div className="box box-info direct-chat direct-chat-info">
                  <div className="box-header with-border">
                    <h3 className="box-title">Room: test</h3>
                      <div className="box-tools pull-right">
                        <button className="btn btn-box-tool" data-widget="collapse">Somebody New<i className="fa fa-minus"></i>
                        </button>
                      </div>
                  </div>
                    <Blaze template="SimpleChatWindow" roomId={'test'} username={Meteor.user().username}/>
                </div>
              </div>
            </div>
          </div>
    )
  }
}
