import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signIn() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error: error})
        window.alert(this.state.error.message)
      })
  }


  render() {
    return (
      <div className="form-inline" style={{margin: '10%'}}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5px'}}
            placeholder="E-mail"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            style={{marginRight: '5px'}}
            placeholder="Password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}
          >
            Sign In
          </button>
        </div>
        <div>
          <Link to={'/signup'}> New user? Sign up.</Link>
        </div>
      </div>
    )
  }
}

export default Signin;
