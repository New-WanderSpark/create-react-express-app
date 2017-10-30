import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MapStyles from './MapStyles.json';

const MyMapComponent = compose(
    withProps( {
        'googleMapURL': 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
        'loadingElement': <div style={{ 'height': `100%` }} />,
        'containerElement': <div style={{ 'height': `400px` }} />,
        'mapElement': <div style={{ 'height': `100%` }} />
    } ),
    withScriptjs,
    withGoogleMap
)( ( props ) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ 'lat': 35.6522787, 'lng': 139.7241987 }}
        defaultOptions={{ 'styles': MapStyles }}
    >
        {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: -14.397, lng: 140.644 }} onClick={props.onMarkerClick} />} */}
        {props.markers.map( ( data ) => {
            return props.isMarkerShown && <Marker position={{ 'lat': data.lat, 'lng': data.lng }} onClick={props.onMarkerClick} />;
        } )}
    </GoogleMap>
);

class GoogleMaps extends React.PureComponent {
    constructor ( props ) {
        super( props );
        this.state = {
            'isMarkerShown': false,
            'markers': [{'lat': 35.6590537, 'lng': 139.6983691}, {'lat': 35.6654861, 'lng': 139.7684781}, {'lat': 35.6154908, 'lng': 139.7753201}]
        };
    }

    componentDidMount () {
        this.delayedShowMarker();
    }

    delayedShowMarker () {
        setTimeout( () => {
            this.setState( { 'isMarkerShown': true } );
        }, 3000 );
    }

    handleMarkerClick () {
        this.setState( { 'isMarkerShown': false } );
        this.delayedShowMarker();
    }

    render () {
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
                markers={this.state.markers}
            />
        );
    }
}

export default GoogleMaps;
