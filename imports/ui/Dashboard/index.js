import React, { Component } from 'react';
import { Link } from 'react-router'
import Button from '../SpaceButtons';

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
                  <div className='travel_button'>
                  <Button src='images/new_travel.jpg' link="none"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
