import React, { Component, PropTypes } from 'react';
import { } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './index.css';

class AppFrame extends Component {
  componentWillReceiveProps(nextProps) {
    // check for login
    if (!this.props.currentUser && nextProps.currentUser) {
      this.context.router.push('/dashboard');
    }
    // check for logout
    if (this.props.currentUser && !nextProps.currentUser) {
      this.context.router.push('/splash');
    }
  }

  render() {
    return (
      <div className="container-fluid no-padding" no-padding>
        <Navbar />
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}


AppFrame.propTypes = {
  children: React.PropTypes.node,
  currentUser: PropTypes.object,
};

AppFrame.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default createContainer(() => ({
  currentUser: Meteor.user(),
}), AppFrame);
