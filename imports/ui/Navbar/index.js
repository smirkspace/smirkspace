import React, { Component } from 'react';
import { Link } from 'react-router'
import { Meteor } from 'meteor/meteor';

import AccountsUIWrapper from '../AccountsUIWrapper';


export default class Navbar extends Component {
	render() {
    	return(
	        <nav className="navbar navbar-default">
	          <div className="container-fluid">
	            <div className="navbar-header">
	                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	                    <span className="sr-only">Toggle navigation</span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                </button>
	                <a className="navbar-brand" href="#">SmirkSpace</a>
	                 <Link to="/"><button type="button" className="btn btn-primary navbar-btn"> Splash </button> </Link> 
	                 <Link to="/dashboard"><button type="button" className="btn btn-default navbar-btn"> Dashboard </button> </Link> 
	                 <Link to="/space"> <button type="button" className="btn btn-info navbar-btn"> Space </button> </Link> 


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