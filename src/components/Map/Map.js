import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './Map.css';

class Map extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google || prevProps.quakes !== this.props.quakes) {
      this.loadMap();
    }
    this.loadMap()
  }

  componentDidMount() {
    this.loadMap()
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
      })

      this.map = new maps.Map(node, mapConfig);
      // var heatmapData = [];
      // this.props.quakes.map((quake) => {
      //   let mag
      //   if (quake.properties.mag < 5) { mag = 3 } else if (quake.properties.mag > 6) { mag = 10 } else { mag = 5 }
      //   heatmapData.push({
      //     location: new google.maps.LatLng(quake.geometry.coordinates[1], quake.geometry.coordinates[0]),
      //     weight: mag
      //   })
      //   const marker = new google.maps.Marker({
      //     position: { lat: quake.geometry.coordinates[1], lng: quake.geometry.coordinates[0] },
      //     map: this.map,
      //     title: quake.properties.title,
      //     icon: {
      //       url: //include a URL for specific icon
      //       }
      //   });
      //   var infowindow = new google.maps.InfoWindow({
      //     content: `<h3>${quake.properties.title}</h3>
      //     <h4>${(new Date(quake.properties.time)).toDateString()}
      //     at depth of ${quake.geometry.coordinates[2]} km</h4>`
      //   });
      //   marker.addListener('click', function () {
      //     infowindow.open(this.map, marker);
      //   });
      // })
      // var heatmap = new google.maps.visualization.HeatmapLayer({
      //   data: heatmapData,
      //   radius: 35
      // });
      // heatmap.setMap(this.map);
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