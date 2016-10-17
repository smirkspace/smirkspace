import React, { Component } from 'react';

import Register from '../Register';
import Login from '../Login';

export default class App extends Component {
  render() {
    return(
      <div>
        {/* Intro Header */}
        <header className="intro">
          <div className="intro-body">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h1 className="brand-heading">SmirkSpace</h1>
                  <p className="intro-text">Helping you connect with students near you!<br />Find your space.</p>
                    <button type="button" className="btn btn-start" data-toggle="modal" data-target="#registerModal">Sign Up</button>
                    <button type="button" className="btn btn-start" data-toggle="modal" data-target="#loginModal">Log In</button>
                  <br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div>
          {/*Sign Up Modal*/}
          <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalLabel">
            <div className="modal-content col-md-offset-3 col-sm-6">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="registerModalLabel">Register</h4>
              </div>
              <div className="modal-body">
                <Register />
              </div>
            </div>
          </div>

          {/*Login Modal*/}
          <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel">
            <div className="modal-content col-md-offset-3 col-sm-6">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="loginModalLabel">Login</h4>
              </div>
              <div className="modal-body">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
