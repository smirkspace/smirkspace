import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { } from 'meteor/meteor';
import { updateUserBlurb } from '../../api/ConversationsDbCollection';
//<button type='button' className='btn btn-secondary' onClick={() => this.closeModal()}>Close</button>
// <textarea value={this.state.blurb} onChange={this.handleChange} rows="4" cols="40"></textarea>

export default class Blurb extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      blurb: 'Enter stuff here',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({blurb: event.target.blurb});
    updateUserBlurb(event.target.blurb);
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.blurb);
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
                <form >
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

