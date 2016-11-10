import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router'
import './index.css';

export default class Footer extends Component {
  render() {
    return(
      <div>
        <footer className="footer"><Link to="/About_us" className="link1">About us</Link> &nbsp; | &nbsp;
        <Link to="/Contact_us" className="link1">Contact us</Link></footer>
      </div>
    );
  }
}
