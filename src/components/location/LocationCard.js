import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2>Name: <span className="card-petname">{this.props.location.name}</span></h2>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close Location</button>
            <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
          </div>
      </div>
    );
  }
}

export default LocationCard;