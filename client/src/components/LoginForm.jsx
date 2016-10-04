import React from "react";
import {Link} from 'react-router';

class LoginForm extends React.Component {

  processForm(event) {
    event.preventDefault();

    console.log("email:", this.refs.email.getValue());
    console.log("password:", this.refs.password.getValue());
  }

  render() {
    return (
      <div className="container">
        <div className="form-group">
          <form action="/" onSubmit={this.processForm.bind(this)}>

            <div className="container">
              <h2>Log In</h2>
              <h4>Login with Email</h4>
            </div>

            <div className="form-group">
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

            <div>Don't have an account? <Link to={`/signup`}>Create one</Link></div>

          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;