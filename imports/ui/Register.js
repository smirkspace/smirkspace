import React, { Component } from 'react';

export default class Register extends Component {
  render() {
    return(
      <template name='register'>
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <div className="input-group">
                  <input type="username" className="form-control" id="inputEmail3" placeholder="eg. student123" />
                  <span className="input-group-addon">@uvic.ca</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Re-type Email</label>
              <div className="col-sm-10">
                <div className="input-group">
                  <input type="username" className="form-control" id="inputEmail3" />
                  <span className="input-group-addon">@uvic.ca</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="eg. Smirk2847" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Re-type Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <div>
                  <p className='disclaimer'>
                  By signing up for Smirkspace, you agree to abide by the <a href =''>Terms of Service</a>.
                  Smirkspace reserves the discretionary right to suspend or delete user accounts.
                  You are encouraged to be a positive member of the Smirkspace community and
                  conduct yourself in a way that is friendly and unoffensive to others.
                  </p>
                  <label>
                      <input type="checkbox" /> I Agree
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-default">Sign up</button>
              </div>
            </div>
          </form>
      </template>
    );
  }
}
