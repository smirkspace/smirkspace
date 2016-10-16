import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export default class AppFrame extends Component {
  render() {
    return(
      <div className="container">
        <div className="header">
          <ul>
            <li><Link to="/">Splash</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/space">Space</Link></li>
          </ul>
        </div>

        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
