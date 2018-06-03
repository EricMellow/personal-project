import React, { Component } from "react";
import './CreateActivity.css';
import { firebaseKey } from "../../keys";
import { db } from '../../firebase';
import { getLocation } from "../../apiCalls/apiCalls";

export class CreateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      type: '',
      duration: ''
    };
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  storeActivity = async (event) => {
    const {
      address,
      type,
      duration
    } = this.state;

    event.preventDefault();
    const location = await getLocation(this.state.address);
    const time = Date.now()
    db.doCreateActivity(address, duration, location.lat, location.lng, type, time);
    this.resetInputFields();
  }

  resetInputFields = () => {
    this.setState({
      address: '',
      type: '',
      duration: ''
    });
  }

  render() {
    const {
      type,
      address,
      duration
    } = this.state;

    const formsFilled =
      address === '' ||
      type === '' ||
      duration === '';

    return (
      <form className="create" onSubmit={event => this.storeActivity(event)}>
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
        <p>*Enter as address, city, state</p>
        <input
          placeholder="Duration"
          name="duration"
          className="input duration-input"
          value={duration}
          onChange={event => this.handleInput(event)}
          type="number"
        />
        <p>*Rounded to the nearest hour</p>
        <button
          type="submit"
          className="add-btn"
          disabled={formsFilled}
        >
          Add Activity
        </button>

        {/* {error && <p>{error}</p>} */}
      </form>
    );
  }
}

export default CreateActivity;