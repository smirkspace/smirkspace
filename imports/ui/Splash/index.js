import React, { Component } from 'react';
export default class Splash extends Component {
  render() {
    return (
      <div>
        <header className="intro">
          <div className="intro-body">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h1 className="brand-heading">SmirkSpace</h1>
                  <p className="intro-text">Helping you connect with students near you!<br />Find your space.</p>
                  <br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
