import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import './index.css';

export default class ContactUs extends Component {
  render() {
    return(
      <div>
       <h4 id="header">Contact us:</h4>
       <p>You can reach us at <strong>smirkspace@gmail.com</strong>, feel free to provide us with feedback or any concerns.</p>
        <div className="empty-box" />
      </div>
    );
  }
}
