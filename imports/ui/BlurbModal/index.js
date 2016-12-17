import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { } from 'meteor/meteor';
import { updateUserBlurb, UserBlurbs } from '../../api/ConversationsDbCollection';


export default class Blurb extends React.Component {
  constructor(props) {
    const findUserBlurb = UserBlurbs.find({ username: Meteor.user().username }).fetch();
    let currentBlurb;
    let currentDisplayName;

    if (findUserBlurb[0] === undefined) {
      currentBlurb = 'Enter your blurb here';
      currentDisplayName = 'Enter a chat name here';
    } else {
      currentBlurb = findUserBlurb[0].blurb;
      currentDisplayName = findUserBlurb[0].displayName;
    }
    super(props);

    this.state = {
      blurb: currentBlurb,
      displayName: currentDisplayName,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //  this.setState({ blurb: event.target.value });
  //  updateUserBlurb(this.state.blurb);
  // }
  handleChange(key) {
    return function (e) {
      const state = {};
      state[key] = e.target.value;
      this.setState(state);
      updateUserBlurb(this.state.blurb, this.state.displayName);
    }.bind(this);
  }

  handleSubmit(event) {
    updateUserBlurb(this.state.blurb, this.state.displayName);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="modal-header">
          <div className="modal-title">
            <div className="modal-text"> Hello, {this.props.name}!</div>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-text" id="modal-text"> Before you join this room...</div>
          <div className="modal-text" id="modal-text" > Please enter a Chat Name and a Blurb about yourself below </div>
          <form >
            Chat Name: <br />
            <input type="text" value={this.state.displayName} onChange={this.handleChange('displayName')} />
            <br /> <br />
            Blurb: <br />
            <textarea type="text" value={this.state.blurb} onChange={this.handleChange('blurb')} />
          </form>
        </div>
      </div>
	    );
	   }
}

Blurb.propTypes = {
  name: PropTypes.string,
};
