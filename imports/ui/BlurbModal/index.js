import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { } from 'meteor/meteor';
import { updateUserBlurb, UserBlurbs } from '../../api/ConversationsDbCollection';


export default class Blurb extends React.Component{
  constructor(props) {
    let currentBlurb = UserBlurbs.find({blurb: Meteor.user().blurb}).fetch();

    if (currentBlurb[0] === undefined){
      currentBlurb = 'Enter your blurb here';
    }
    else{
      currentBlurb = currentBlurb[0].blurb;
    }
    super(props);

    this.state = {
      blurb: currentBlurb,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({blurb: event.target.value});
    
  }

  handleSubmit(event) {
    updateUserBlurb(this.state.blurb);
    event.preventDefault();

  }

	render() {
		return (
	        <div>
              <div className='modal-header'>
                <div className='modal-title'> 
                  <div className="modal-text"> Hello, {this.props.name}!</div>
                </div>
              </div>
              <div className='modal-body'>  
                  <div className='modal-text' id="modal-text"> Before you join this room...</div>
                  <div className='modal-text' id="modal-text" > Please enter a blurb about yourself below </div>
                <form onSubmit={this.handleSubmit}>
                  <textarea type='text' value={this.state.blurb} onChange={this.handleChange} />

                </form>

              </div>

	        </div>
	    );
	}
}

Blurb.propTypes = {
  buttonName: PropTypes.string,
  username: PropTypes.string,
};

