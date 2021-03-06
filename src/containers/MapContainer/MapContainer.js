import { GoogleApiWrapper } from 'google-maps-react';
import React, {Component} from "react";
import { firebaseKey } from "../../keys";
import Map from "../../components/Map/Map";
import PropTypes from 'prop-types';



export class MapContainer extends Component {

  render() {
    return (
      <Map google={this.props.google} type={this.props.type}/>
    );
  }
}

MapContainer.propTypes = {
  type: PropTypes.string,
  google: PropTypes.object
};

export default GoogleApiWrapper({
  apiKey: firebaseKey,
  libraries: ['visualization']
})(MapContainer);