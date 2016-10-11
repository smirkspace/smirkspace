import React, { Component } from 'react';

import Register from './Register.js';
import Login from './Login.js';

export default class App extends Component {
  render() {
    return(
      <div>
        <div>
          /* Navigation */
          <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                  Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top"></a>
              </div>

              /* Collect the nav links, forms, and other content for toggling */
              <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    /* Hidden li included to remove active class from about link when scrolled up past about section */
                    <li class="hidden">
                      <a href="#page-top"></a>
                    </li>
                    <li>
                      <a class="page-scroll" href="#about">About</a>
                    </li>
                    <li>
                      <a class="page-scroll" href="#dev">Development</a>
                    </li>
                    <li>
                      <a class="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
              </div>
              /* /.navbar-collapse */
            </div>
            /* /.container */
          </nav>

          /* Intro Header */
          <header class="intro">
            <div class="intro-body">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2">
                    <h1 class="brand-heading">SmirkSpace</h1>
                    <p class="intro-text">Helping you connect with students near you!<br />Find your space.</p>
                      <button type="button" class="btn btn-start" data-toggle="modal" data-target="#registerModal">Sign Up</button>
                      <button type="button" class="btn btn-start" data-toggle="modal" data-target="#loginModal">Log In</button>
                    <br /><br /><br />
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div>
          /*Sign Up Modal*/
          <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel">
            <div class="modal-content col-md-offset-3 col-sm-6" style="margin-top: 15vh">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="registerModalLabel">Register</h4>
              </div>
              <div class="modal-body">
                <Register />
              </div>
            </div>
          </div>

          /*Login Modal*/
          <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel">
            <div class="modal-content col-md-offset-3 col-sm-6" style="margin-top: 15vh">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="loginModalLabel">Login</h4>
              </div>
              <div class="modal-body">
                <Login />
              </div>
            </div>
          </div>
        </div>

        /* About Section */
        <div>
          <section id="about" class="content-section text-center">
            <div class="row">
              <div class="col-lg-8 col-lg-offset-2">
                <h1>What is Smirkspace?</h1>
                <p>Smirkspace is a project aimed at connecting people with similar interests who may not otherwise meet. We feel that individuals with niche interests, language barriers, social anxiety or other factors that could limit their social reach will benefit most from the Smirkspace platform.</p>
                <P>Besides attempting to solve this very real issue, however, Smirkspace does much much more. It is a student communication platform for almost any situation. Want to meet fellow dog-lovers? Need a study partner for your new class? Want to have an epic rap battle with someone? Smirkspace to the rescue! The possibilities are endless.</P>
                <p>Smirkspace is divided into 'spaces', each with its own topic of discussion. Simply join the space for your chosen topic and get chatting immediately. More spaces are always being added, and if you have a good idea for a new space you can contact us and submit a space request!</p>
                <p>Sign up and start smirking today!</p>
              </div>
            </div>
          </section>

          /* Development Section */
          <section id="dev" class="content-section text-center">
            <div class="dev-section">
              <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
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

          /* Contact Section */
          <section id="contact" class="container content-section text-center">
            <div class="row">
              <div class="col-lg-8 col-lg-offset-2">
                <h2>Contact SmirkSpace</h2>
                <p>Feel free to email us and provide feedback, give us suggestions for new spaces, or to just say hello!</p>
                <p><a href="mailto:smirkspace@gmail.com">smirkspace@gmail.com</a>
                </p>
                <ul class="list-inline banner-social-buttons">
                  <li>
                    <a href="https://github.com/smirkspace/smirkspace" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div>
          <br /><br /><br /><br /><br /><br />
          /* Footer */
          <footer>
            <div class="container text-center">
              <p>Copyright &copy; Smirkspace 2016</p>
            </div>
          </footer>

          /* jQuery */
          <script src="../vendor/jquery/jquery.js"></script>

          /* Bootstrap Core JavaScript */
          <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

          /* Plugin JavaScript */
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

          /* Google Maps API Key - Use your own API key to enable the map feature. More information on the Google Maps API can be found at https://developers.google.com/maps/ */
          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>

          /* Theme JavaScript */
          <script src="../../client/stylesheets/js/grayscale.min.js"></script>
        </div>
      </div>
    );
  }
}
