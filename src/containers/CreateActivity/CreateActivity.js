import React, { Component } from "react";
import './CreateActivity.css';

export class CreateActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      type: '',
      duration: ''
    }
  }

  render() {
    const {
      type,
      address,
      duration
    } = this.state;

    return (
      <form className="create" onSubmit={event => this.storeData(event)}>
        <input
          placeholder="Event Type"
          name="type"
          className="input type-input"
          value={type}
          onChange={event => this.handleInput(event)}
          type="text"
        />
        <input
          placeholder="Address"
          name="address"
          className="input address-input"
          value={address}
          onChange={event => this.handleInput(event)}
          type="text"
        />
        <input
          placeholder="Duration"
          name="duration"
          className="input duration-input"
          value={duration}
          onChange={event => this.handleInput(event)}
          type="text"
        />
        <button
          type="submit"
          className="sign-in-btn"
          disabled={invalidUserInfo}
        >
          Add Activity
        </button>

        {/* {error && <p>{error}</p>} */}
      </form>
    )
  }
}