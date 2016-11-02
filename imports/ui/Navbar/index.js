import React, { Component } from 'react';
import { Link } from 'react-router'
import { Meteor } from 'meteor/meteor';

import AccountsUIWrapper from '../AccountsUIWrapper';


export default class Navbar extends Component {
	render() {
    	return(
	        <nav className="navbar navbar-inverted">
	          <div className="container">
	            <div className="navbar-header">
	                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	                    <span className="sr-only">Toggle navigation</span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                </button>
	                <h1><Link to="/dashboard" className="navbar-brand">SmirkSpace</Link> </h1>


	            </div>

	            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" className="lead">
	                <ul className="nav navbar-nav navbar-right">
	                <li><button type="button" className="btn btn-success navbar-btn"> <AccountsUIWrapper /> </button> </li>
	                </ul>
	            </div>
	          </div>

	        </nav>

	    );
	}
}
