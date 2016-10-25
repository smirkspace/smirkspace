import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from '../AccountsUIWrapper';

// import Task from '../Navbar.jsx';


class AppFrame extends Component {
  componentWillReceiveProps(nextProps) {
    // check for login
    if(!this.props.currentUser && nextProps.currentUser) {
      this.context.router.push('/dashboard')
    }
    // check for logout
    if(this.props.currentUser && !nextProps.currentUser) {
      this.context.router.push('/splash')
    }
  }

  render() {
    return(
      <div className="container">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">SmirkSpace</a>
                <button type="button" className="btn btn-default navbar-btn">Home</button>
                <button type="button" className="btn btn-default navbar-btn">Dashboard</button>
                <button type="button" className="btn btn-default navbar-btn">Space</button>


            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                <li> <AccountsUIWrapper /> </li>
                </ul>
            </div>
          </div>
          
        </nav>

        <div className="content">
          {this.props.children}
        </div>
      </div>
      );
  }
}










    // return(
    //   <div className="container">
    //     <div className="header">
    //       <AccountsUIWrapper />

    //       <ul>
    //         <li><Link to="/">Splash</Link></li>
    //         <li><Link to="/dashboard">Dashboard</Link></li>
    //         <li><Link to="/space">Space</Link></li>
    //       </ul>
    //     </div>

        // <div className="content">
        //   {this.props.children}
        // </div>
    //   </div>


AppFrame.propTypes = {
  currentUser: PropTypes.object,
};

AppFrame.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, AppFrame);
