import React from 'react';
import { resendVerif } from '../../api/ConversationsDbCollection';

export default function VerifyEmail() {
  return (
    <div>
      <header className="intro">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="brand-heading2">Please Verify Your Email</h1>
                <p className="intro-text">To continue on and get chatting, please verify your email using the
                link that was sent to you.</p>
                <p className="intro-text"> If you need us to resend the verification email, please click the link below.</p>
                <br />
                <button className="btn btn-primary" onClick={resendVerif} >Resend Verification</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
