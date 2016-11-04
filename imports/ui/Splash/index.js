import React, { Component } from 'react';

export default class Splash extends Component {
  render() {
    return(
      <div>
        <header className="intro">
          <div className="intro-body">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h1 className="brand-heading">SmirkSpace</h1>
                  <p className="intro-text">Connecting People Through Conversation</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
