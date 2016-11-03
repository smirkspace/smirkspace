import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router'
import Button from '../SpaceButton';
import Carousel from '../Carousel';

//               <div className="col-md-10 col-md-offset-1">
export default class Dashboard extends Component {
  render() {
    return(
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
              <br></br><br></br>

            </div>
          </div>

        </header>
          <div className="row">
            <div className="col-md-12">
                <div> <Carousel /> </div>
                 </div>
               </div>
        
      </div>
    );
  }
}
