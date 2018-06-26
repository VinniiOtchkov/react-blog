import React from 'react';
import { connect } from 'react-redux';
import { Collection, CollectionItem } from 'react-materialize';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Author.css';


const MapComponent = withGoogleMap(({ lat, lng }) =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: lat, lng: lng }}
  >
    <Marker
      position={{ lat: lat, lng: lng }}
    />
  </GoogleMap>
)

const Author = (props) => {

  let [currentAuthor] = props.authors
    ? props.authors.filter(
      author => author.name === props.match.params.authorName
    )
    : '';

  return (
    <div>
      <img className="userImage" alt="" src={window.location.origin + '/user_icon.png'} />
      {currentAuthor ?
        <Collection header={currentAuthor.name}>
          <CollectionItem>
            <b>Email</b>:
          <br />
            {currentAuthor.email}
          </CollectionItem>
          <CollectionItem>
            <b>Company</b>:
          <br />
            {currentAuthor.company.name}
          </CollectionItem>
          <CollectionItem>
            <b>Catchphrase</b>:
          <br />
            {currentAuthor.company.catchPhrase}
          </CollectionItem>
          <CollectionItem>
            {currentAuthor.website}
          </CollectionItem>
        </Collection>
        : <p> Loading...</p>}

      {currentAuthor ? (
        <div className="mapContainer">
          <MapComponent
            lat={parseFloat(currentAuthor.address.geo.lat)}
            lng={parseFloat(currentAuthor.address.geo.lng)}
            containerElement={<div style={{ height: `370px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      ) : (<p>
        'Loading...'
          </p>
        )}
    </div>


  );
};

const mapStateToProps = (state) => {
  return {
    authors: state.authors
  }
}

export default connect(mapStateToProps, null)(Author);
