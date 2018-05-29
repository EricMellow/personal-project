import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './Map.css';

class Map extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.google !== this.props.google || prevProps.quakes !== this.props.quakes) {
  //     this.loadMap();
  //   }
  //   this.loadMap()
  // }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      const mapConfig = Object.assign({}, {
        center: { lat: 39.7392, lng: -104.9903 },
        zoom: 12,
        gestureHandling: "cooperative",
        mapTypeId: 'terrain'
      });

      this.map = new maps.Map(node, mapConfig);
      var mockActivitiesData = [{ lat: 39.730110, lng: -105.069302, duration: '1hr', type: 'basketball' }, { lat: 39.730110, lng: -104.9903, duration: '1hr', type: 'frolf' }];
      mockActivitiesData.map(activity => {
        const marker = new google.maps.Marker({
          position: { lat: activity.lat, lng: activity.lng },
          map: this.map,
          title: activity.type
        });
        var infowindow = new google.maps.InfoWindow({
          content: `<h3>${activity.type}</h3>
          <h4>Duration: ${activity.duration}</h4>`
        });
        marker.addListener('click', function () {
          infowindow.open(this.map, marker);
        });
      });
    }
  }
  

  render() {
    return (
      <div ref="map" className="map">
      Loading map...
      </div>
    );
  }
}

export default Map;