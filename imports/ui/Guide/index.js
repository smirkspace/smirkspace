import React from 'react';
import './index.css';

export default function Guide() {
  return (
    <div>
      <p>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</p>
      <p>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</p>
      <p>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</p>

      <div className="whatwedo" id="whatwedo">
      <img className="img" width="400" height="300" src="/images/exa.png" />
        <h1 className="one">Turn any email provider into a growth marketing platform.</h1>

        <p className="paragraph1">A beautiful dashboard to manage all your templates and a simple REST API to automate everything.
        </p>
      </div>
    <div className="usecase" id="usecase">
    <img className="img" width="400" height="300" src="/images/exa.png" />

      <h1 className="two">Email is a powerful part of your customer experience..</h1>
      <p className="paragraph2">Your product speaks to customers through email. Notifications, Invitations, and Payment Receipts
      are critical to your user experience.</p>
    </div>
      <div className="bottom_splash" id="bottom_splash">
      <img className="img" width="400" height="300" src="/images/exa.png" />

        <h1 className="one">Iterate and optimize quickly without deploying code.</h1>
        <p className="paragraph1">Run A/B tests, build drip campaigns, tweak subject lines whenever you want - no developers required.
      Try it Free.</p>
      </div>
      <p>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</p>
    </div>
  );
}
