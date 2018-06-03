import React, { Component } from "react";
import './SignUp.css';
import { auth, db } from '../../firebase';
import { connect } from 'react-redux';
import { authenticateUser } from "../../actions/authenticateUser";
import { addUserId } from "../../actions/userIdActions";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      zipcode: undefined,
      error: null
    };
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  resetState = () => {
    this.setState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      zipcode: undefined,
      error: null
    });
  }

  storeData = async (event) => {
    const {
      email,
      password,
      username,
      zipcode
    } = this.state;

    event.preventDefault();
    try {
      const authUser = await auth.doCreateUserWithEmailAndPassword(email, password);
      await db.doCreateUser(authUser.user.uid, username, email, zipcode);
      this.resetState();
      this.props.storeUserId(authUser.user.uid);
      this.props.authenticate();
      this.props.history.push('/');
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      zipcode,
      error
    } = this.state;

    const invalidUserInfo =
      password !== confirmPassword ||
      password === '' ||
      email === '' ||
      username === '' ||
      zipcode === null;

    return (
      <form className="sign-up" onSubmit={event => this.storeData(event)}>
        <input
          placeholder="Username"
          name="username"
          className="input name-input"
          value={username}
          onChange={event => this.handleInput(event)}
          type="text"
        />
        <input
          placeholder="Zip Code"
          name="zipcode"
          className="input zip-input"
          value={zipcode}
          onChange={event => this.handleInput(event)}
          type="number"
        />
        <input
          placeholder="Email Address"
          name="email"
          className="input email-input"
          value={email}
          onChange={event => this.handleInput(event)}
          type="text"
        />
        <input
          placeholder="Password"
          name="password"
          className="input password-input"
          value={password}
          onChange={event => this.handleInput(event)}
          type="password"
        />
        <input
          placeholder="Confirm Password"
          name="confirmPassword"
          className="input confirm-input"
          value={confirmPassword}
          onChange={event => this.handleInput(event)}
          type="password"
        />
        <button className="sign-up-btn" type="submit" disabled={invalidUserInfo}>
          Sign Up
        </button>

        {error && <p>{error}</p>}
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  authenticate: () => dispatch(authenticateUser()),
  storeUserId: (userId) => dispatch(addUserId(userId))
});


export default connect(null, mapDispatchToProps)(SignUp);