import React, { Component } from 'react';
import { Link } from 'react-router'
import SpaceChat from '../SpaceChat';

export default class SpaceFrame extends Component {
  
  render() {

    return(
      <div className="container">
        <div className="content">
          <SpaceChat />
        </div>
      </div>
    );
  }
}
