import React from 'react';
import Guide from '../Guide';
import './index.css';

export default function Splash() {
  return (
    <div>
      <header className="intro">
        <div className="intro-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="brand-heading">SmirkSpace</h1>
                <p className="intro-text">Connecting People Through Conversation</p>
              </div>
            </div>
            <div className="row">
              <img src="images/space-ship-logo.png" alt="space-ship-logo" height="25%" width="25%" />
            </div>
            <div className="row">
              <div className="col-md-2 col-md-offset-3">
                <a href="#what-we-do">
                  <button type="button" className="btn btn-main">
                    <h2> What We Do <span className="glyphicon glyphicon-globe" aria-hidden="true" /></h2>
                  </button>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#user-story">
                  <button type="button" className="btn btn-main">
                    <h2 className="space">User Story <span className="glyphicon glyphicon-user" aria-hidden="true" /></h2>
                  </button>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#bottom-splash">
                  <button type="button" className="btn btn-main">
                    <h2> Why Us? <span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></h2>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Guide />
    </div>
  );
}
