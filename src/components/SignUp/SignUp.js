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

    const invalidUserInfo =
      password !== confirmPassword ||
      password === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.submit}>
        <input
          placeholder="Full Name"
          name="username"
          value={username}
          onChange={event => this.handleInput(event)}
          type="text"
        />
        <input
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={event => this.handleInput(event)}
          type="text"
        />
        <input
          placeholder="Password"
          name="password"
          value={password}
          onChange={event => this.handleInput(event)}
          type="password"
        />
        <input
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={event => this.handleInput(event)}
          type="password"
        />
        <button type="submit" disabled={invalidUserInfo}>
          Sign Up
        </button>

        {error && <p>Oops!</p>}
      </form>
    );
  }
}

export default SignUp;