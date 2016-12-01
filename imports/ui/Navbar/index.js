import React from 'react';
import { Link } from 'react-router';
import { } from 'meteor/meteor';
import AccountsUIWrapper from '../AccountsUIWrapper';
import './index.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-inverted">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/dashboard"><img alt="dashboard" src="images/logo2.png" width="140" height="100" /><h3 className="brandName">Smirkspace</h3></Link>
        </div>
        <div className="collapse navbar-collapse lead" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li> <div className="divButton"> <AccountsUIWrapper /> </div> </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
