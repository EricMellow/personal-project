import React, { Component } from "react";
import './SignIn.css';
import { auth } from '../../firebase';
import { connect } from 'react-redux';
import { authenticateUser } from "../../actions/authenticateUser";
import { addUserId } from "../../actions/userIdActions";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
      email: '',
      password: '',
      error: null
    });
  }

  storeData = async (event) => {
    event.preventDefault();
    try {
      const authUser = await auth.doSignInWithEmailAndPassword(this.state.email, this.state.password);
      this.props.storeUserId(authUser.user.uid);
      this.resetState();
      this.props.authenticate();
      this.props.history.push('/distance');
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state;

    const invalidUserInfo =
      password === '' ||
      email === '';

    return (
      <form onSubmit={event => this.storeData(event)}>
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
        <button type="submit" disabled={invalidUserInfo}>
          Sign In
        </button>

        {error && <p>{error}</p>}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  authenticate: () => dispatch(authenticateUser()),
  storeUserId: (userId) => dispatch(addUserId(userId))
});

export default connect(null, mapDispatchToProps)(SignIn);