import React, { Component } from 'react';
import { Link } from 'react-router'
//       background: url(images/palm_trees2.jpg) no-repeat bottom center scroll;
import SpaceChat from '../SpaceChat';

export default class SpaceFrame extends Component {


  render() {
    const style = {
      backgroundImage: 'url(' + images/palm_trees2.jpg + ')',
    };

    return(
      <div className="container-fluid">
        <div className="header">
          <div className="row"> 
            <div className="col-xs-6 col-sx-offset-6"><h1> T r a v e l </h1> </div>
          </div>
        </div>

        <div className="content">
          <div className="table">
            <div className="row">
              <div className="pull-right">
                <button>Report</button>
                <button><Link to="/space/travel">Next</Link></button>
              </div>
            </div>
            <div className="row">
              <SpaceChat />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
