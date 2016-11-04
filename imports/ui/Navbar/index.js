import React, { Component } from 'react';
import { Link } from 'react-router'
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../AccountsUIWrapper';
import './index.css';

export default class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-inverted">
       <div className="container">
        <div className="navbar-header">
         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
         </button>
         <Link to="/dashboard"><img src="images/logo2.png" width="140" height="100"></img><h3 className="brandName">Smirkspace</h3></Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" className="lead">
         <ul className="nav navbar-nav navbar-right">
          <li><button type="button" className="btn navbar-btn"> <AccountsUIWrapper /> </button> </li>
         </ul>
        </div>
       </div>
     </nav>) }
}
