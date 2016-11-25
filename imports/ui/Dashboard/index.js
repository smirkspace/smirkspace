import React from 'react';
import { Meteor } from 'meteor/meteor';
import { } from 'react-router';
import Carousel from '../Carousel';

import Blurb from '../BlurbModal';


export default function Dashboard() {
  return (
    <div>
      <header className="intro">
        <div className="intro-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h2>Welcome to your dashboard {Meteor.user().username}</h2>
                <p className="intro-text">Enter a space below to start chatting!</p>
              </div>
            </div>
            <br /><br />
          </div>
        </div>
      </header>
        <div> <Carousel /> </div>
        <div> <Blurb blurb="WHATS UP!!" /> </div>
    </div>
  );
}
