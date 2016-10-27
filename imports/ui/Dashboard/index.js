import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Dashboard extends Component {
  render() {
    return(
      <div>
        <header className="intro">
          <div className="intro-body">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h1 className="brand-heading">Dashboard</h1>
                  <p className="intro-text">Helping you connect with students near you!<br />Find your space.</p>
                  <h2><Link to="/space/travel">Travel</Link></h2>
                  <br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
