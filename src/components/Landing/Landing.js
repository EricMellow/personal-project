import React, { Component } from "react";
import './Landing.css'

export class Landing extends Component {
  constructor(props) {
    super(props)
    this.state ={
      zip: null
    };
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div className="landing">
        <form className="landing-form">
          <input 
            name="zip"
            placeholder="Zip Code"
            className="zip"
            type="number"
            value="this.state.zip"
            onChange={event => this.handleInputChange(event)}
          >
          </input>
          <h3>Enter your zip code to see activities near you</h3>
        </form>
      </div>
    );
  }
}

export default Landing;