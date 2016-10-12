import React, { Component } from 'react';

import Register from './Register.js';
import Login from './Login.js';

export default class App extends Component {
  render() {
    return(
      <div>
        <div>
          {/* Navigation */}
          <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                  Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top"></a>
              </div>

              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav">
                    {/* Hidden li included to remove active className from about link when scrolled up past about section */}
                    <li className="hidden">
                      <a href="#page-top"></a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#dev">Development</a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </div>
            {/* /.container */}
          </nav>

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
        </div>

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

        {/* About Section */}
        <div>
          <section id="about" className="content-section text-center">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <h1>What is Smirkspace?</h1>
                <p>Smirkspace is a project aimed at connecting people with similar interests who may not otherwise meet. We feel that individuals with niche interests, language barriers, social anxiety or other factors that could limit their social reach will benefit most from the Smirkspace platform.</p>
                <p>Besides attempting to solve this very real issue, however, Smirkspace does much much more. It is a student communication platform for almost any situation. Want to meet fellow dog-lovers? Need a study partner for your new className? Want to have an epic rap battle with someone? Smirkspace to the rescue! The possibilities are endless.</p>
                <p>Smirkspace is divided into 'spaces', each with its own topic of discussion. Simply join the space for your chosen topic and get chatting immediately. More spaces are always being added, and if you have a good idea for a new space you can contact us and submit a space request!</p>
                <p>Sign up and start smirking today!</p>
              </div>
            </div>
          </section>

          {/* Development Section */}
          <section id="dev" className="content-section text-center">
            <div className="dev-section">
              <div className="container">
                <div className="col-lg-8 col-lg-offset-2">
                  <h1>Development Milestones</h1>
                  <h3>Milestone 1 - 2016/10/14</h3>
                    <p>Develop welcome page, dashboard and chat page</p>
                    <p>Enable user accounts and login functionality</p>
                    <p>Aquire usage data from fellow students using surveys</p>
                  <h3>Milestone 2 - 2016/11/04</h3>
                  <p>Stuff about milestone 2 goes here</p>
                  <h3>Milestone 3 - 2016/12/02</h3>
                  <p>Stuff about milestone 3 goes here</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="container content-section text-center">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <h2>Contact SmirkSpace</h2>
                <p>Feel free to email us and provide feedback, give us suggestions for new spaces, or to just say hello!</p>
                <p><a href="mailto:smirkspace@gmail.com">smirkspace@gmail.com</a>
                </p>
                <ul className="list-inline banner-social-buttons">
                  <li>
                    <a href="https://github.com/smirkspace/smirkspace" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div>
          <br /><br /><br /><br /><br /><br />
          {/* Footer */}
          <footer>
            <div className="container text-center">
              <p>Copyright &copy; Smirkspace 2016</p>
            </div>
          </footer>

          {/* jQuery */}
          <script src="../vendor/jquery/jquery.js"></script>

          {/* Bootstrap Core JavaScript */}
          <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

          {/* Plugin JavaScript */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

          {/* Google Maps API Key - Use your own API key to enable the map feature. More information on the Google Maps API can be found at https://developers.google.com/maps/ */}
          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>

          {/* Theme JavaScript */}
          <script src="../../client/stylesheets/js/grayscale.min.js"></script>
        </div>
      </div>
    );
  }
}
