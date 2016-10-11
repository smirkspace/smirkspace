import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return(
      /*LOGIN FORM*/
      <template name='login'>
          <form class="form-horizontal">
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
              <div class="col-sm-10">
                <div class="input-group">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                  <span class="input-group-addon">@uvic.ca</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-8">
                <div class="checkbox">
                  <label>
                    <input type="checkbox">Remember me</input>
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-4">
                <button type="submit" class="btn btn-default">Sign in</button>
              </div>
            </div>
          </form>
      </template>
    );
  }
}
