import React, { Component } from "react";
import './Landing.css';
import { connect } from "react-redux";
import { addZipcode } from "../../actions/zipcodeActions";
import { getLocation } from "../../apiCalls";

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: undefined
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.storeZipcode(this.state.zip);
    this.resetState();
    this.props.history.push('/distance');
  }

  resetState = () => {
    this.setState({
      zip: undefined
    });
  }

  render() {
    return (
      <div className="landing">
        <form className="landing-form" onSubmit={event => this.handleSubmit(event)}>
          <input
            name="zip"
            placeholder="Zip Code"
            className="zip"
            type="number"
            value={this.state.zip}
            onChange={event => this.handleInputChange(event)}
          >
          </input>
          <h3>Enter your zip code to see activities near you</h3>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeZipcode: (zipcode) => dispatch(addZipcode(zipcode))
})

export default connect(null, mapDispatchToProps)(Landing);