import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './Map.css';
import { getLocation } from "../../apiCalls";
import { connect } from "react-redux";
import { db } from '../../firebase';
import * as firebase from "../../firebase/firebase";
import { addActivities } from "../../actions/activitiesActions";

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    this.loadMap()
  }

  componentDidMount() {
    firebase.db.ref('actions/').on('value', snapshot => this.props.storeActivities(snapshot.val()));
    this.loadMap();
  }

  loadMap = async () => {
    if (this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      const mapCenter = await getLocation(this.props.zipcode);
      const mapConfig = Object.assign({}, {
        center: mapCenter,
        zoom: 12,
        gestureHandling: "cooperative",
        mapTypeId: 'roadmap'
      });

      this.map = new maps.Map(node, mapConfig);
      const activityKeys = Object.keys(this.props.activities)
      console.log(activityKeys)
      activityKeys.map(activity => {
        const storeActivity = this.props.activities[activity]
        const marker = new google.maps.Marker({
          position: { lat: storeActivity.lat, lng: storeActivity.lng },
          map: this.map,
          title: storeActivity.type
        });
        var infowindow = new google.maps.InfoWindow({
          content: `<h3>${storeActivity.type}</h3>
          <h4>Duration: ${storeActivity.duration}</h4>`
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

const mapStateToProps = ({ zipcode, activities }) => ({
  zipcode,
  activities
});

const mapDispatchToProps = (dispatch) => ({
  storeActivities: (activities) => dispatch(addActivities(activities))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);