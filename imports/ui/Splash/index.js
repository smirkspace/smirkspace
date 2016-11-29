import React from 'react';
import Guide from '../Guide';

export default function Splash() {
  return (
    <div>
      <header className="intro">
        <div className="intro-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="brand-heading">SmirkSpace</h1>
                <p className="intro-text">    Connecting People Through Conversation</p>
              </div>
            </div>

            <div className="row">
                  <img src="images/space-ship-logo.png" alt="space-ship-logo" height="30%" width="30%"></img>
            </div>
            <div className="row">
              <div className="col-md-2 col-md-offset-3">
                <a href="#whatwedo">
                  <button type="button" className="btn btn-main">
                    <h2> What we do <span className="glyphicon glyphicon-globe" aria-hidden="true" /></h2>
                  </button>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#usecase">
                  <button type="button" className="btn btn-main">
                    <h2> User stories <span className="glyphicon glyphicon-user" aria-hidden="true" /></h2>
                  </button>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#bottom_splash">
                  <button type="button" className="btn btn-main">
                    <h2> Why us <span className="glyphicon glyphicon-eye-open" aria-hidden="true" /></h2>
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
