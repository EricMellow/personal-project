import { GoogleApiWrapper } from 'google-maps-react';
import React, {Component} from "react";
import { firebaseKey } from "../../keys";
import Map from "../../components/Map/Map";

export class MapContainer extends Component {

  render() {
    return (
      <Map google={this.props.google} />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: firebaseKey,
  libraries: ['visualization']
})(MapContainer);