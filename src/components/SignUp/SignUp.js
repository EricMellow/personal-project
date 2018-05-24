import React, { Component } from "react";
import './SignUp.css';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    };
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      error
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.handleInput(event)}
          type="text"
          placeholder="Full Name"
          name="username"
        />
        <input
          value={email}
          onChange={event => this.handleInput(event)}
          type="text"
          placeholder="Email Address"
          name="email"
        />
        <input
          value={password}
          onChange={event => this.handleInput(event)}
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          value={confirmPassword}
          onChange={event => this.handleInput(event)}
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
        />
        <button type="submit">
          Sign Up
        </button>

        {error && <p>Oops!</p>}
      </form>
    );
  }
}

export default SignUp;