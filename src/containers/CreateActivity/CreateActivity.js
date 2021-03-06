import React, { Component } from "react";
import './CreateActivity.css';
import { db } from '../../firebase';
import { getLocation } from "../../apiCalls/apiCalls";

export class CreateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      type: '',
      duration: '',
      message: false
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
    const time = Date.now();
    const uppercaseType = type.toUpperCase();
    db.doCreateActivity(
      address, 
      duration, 
      location.lat, 
      location.lng, 
      uppercaseType, 
      time
    );
    this.resetInputFields();
    this.setState({ message: true });
    window.setTimeout(this.removeMessage, 5000);
  }

  removeMessage = () => {
    this.setState({ message: false });
  }

  resetInputFields = () => {
    this.setState({
      address: '',
      type: '',
      duration: '',
      message: false
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
      <div className="create">
        <form 
          className="create-form" 
          onSubmit={event => this.storeActivity(event)}
        >
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
          {this.state.message && <p className="message">Your activity has been added!</p>}
        </form>
      </div>
    );
  }
}

export default CreateActivity;