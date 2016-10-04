import React from 'react';
import {Link} from 'react-router';
import {Card, CardTitle, CardText, RaisedButton, TextField} from 'material-ui';

class SignUpForm extends React.Component {
  processForm(event) {
    event.preventDefault();
    console.log("name:", this.refs.name.getValue());
    console.log("email:", this.refs.email.getValue());
    console.log("password:", this.refs.password.getValue());
  }

  render() {
    return (
      <div className="container">
        <form action="/" onSubmit={this.processForm.bind(this)}>
          <div className="container form-group">
            <div className="container"> 
              <h2>Sign Up</h2>
              <h4>Sign Up with Email</h4>
            </div>

            <div className="form-group">
              <input type="text" value="name" placeholder="Name" />
            </div>

            <div className="form-group">
              <input value="email" placeholder="Email" />
            </div>

            <div className="form-group">
              <input value="password" placeholder="Password" type="password" />
            </div>

            <div className="button-line">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>

            <div>Already have an account? <Link to={'/login'}>Log in</Link></div>
          </div>
        </form>
      </div>
    );
  }

}

export default SignUpForm;