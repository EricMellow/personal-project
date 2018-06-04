import React, { Component } from "react";
import './Tags.css';
import MapContainer from "../MapContainer/MapContainer";

export class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ''
    };
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value.toUpperCase()
    });
  }

  render() {

    return (
      <div className="tags ">
        <div className="tags-style" >
          <form className="tags-form">
            <input
              placeholder="Search for a type of activity"
              name="type"
              className="input add-type-input"
              value={this.state.type}
              onChange={event => this.handleInput(event)}
              type="text"
            />
          </form>
          <MapContainer type={this.state.type} />
        </div>
      </div>
    );
  }
}

export default Tags;