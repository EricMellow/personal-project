import React, { Component } from "react";
import './CreateActivity.css';
import { firebaseKey } from "../../keys";
import { db } from '../../firebase';
import { getLocation } from "../../apiCalls";

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
    db.doCreateActivity(address, duration, location.lat, location.lng, type);
    this.resetInputFields();
  }

  resetInputFields = () => {
    this.setState({
      address: '',
      type: '',
      duration: ''
    });
  }
  
  // getLocation = async () => {
  //   const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=${firebaseKey}`);
  //   const location = await response.json();
  //   return location.results[0].geometry.location;
  // }

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
          type="text"
        />
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