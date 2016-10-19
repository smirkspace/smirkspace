import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from '../AccountsUIWrapper';

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
        <div className="header">
          <AccountsUIWrapper />

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
