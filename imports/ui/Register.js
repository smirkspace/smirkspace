import React, { Component } from 'react';

export default class Register extends Component {
  render() {
    return(
      /*REGISTRATION FORM*/
      <template name='register'>
          <form class="form-horizontal">
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
              <div class="col-sm-10">
                <div class="input-group">
                  <input type="username" class="form-control" id="inputEmail3" placeholder="eg. student123" />
                  <span class="input-group-addon">@uvic.ca</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">Re-type Email</label>
              <div class="col-sm-10">
                <div class="input-group">
                  <input type="username" class="form-control" id="inputEmail3" />
                  <span class="input-group-addon">@uvic.ca</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="eg. Smirk2847" />
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">Re-type Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-12">
                <div>
                  <p class='disclaimer'>
                  By signing up for Smirkspace, you agree to abide by the <a href =''>Terms of Service</a>.
                  Smirkspace reserves the discretionary right to suspend or delete user accounts.
                  You are encouraged to be a positive member of the Smirkspace community and
                  conduct yourself in a way that is friendly and unoffensive to others.
                  </p>
                  <label>
                      <input type="checkbox">I Agree</input>
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-default">Sign up</button>
              </div>
            </div>
          </form>
      </template>
    );
  }
}
