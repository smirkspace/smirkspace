import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'
import Button from '../SpaceButton'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <header className="intro">
          <div className="intro-body">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h2>Welcome to your dashboard {Meteor.user().username}</h2>
                  <p className="intro-text">Enter a space below to start chatting!</p>
                    <div className='travel_button'>
                      <Button source='images/new_travel.jpg' link="/space/travel"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
