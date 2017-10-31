import React from 'react';
import { compose, withProps } from 'recompose';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MapStyles from './MapStyles.json';

const MyMapComponent = compose(
    withProps( {
        'googleMapURL': 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAg1lkAlzKUw2hoZnMjiHSMGDcg2q3_2Go',
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
        {props.markers.map( ( data, index ) => {
            return props.isMarkerShown && <Marker key={index} position={{ 'lat': data.lat, 'lng': data.lng }} onClick={props.onMarkerClick} />;
        } )}
    </GoogleMap>
);

class GoogleMaps extends React.PureComponent {
    constructor ( props ) {
        super( props );
        this.state = {
            'isMarkerShown': false
        };
    }

    componentDidMount () {
        this.delayedShowMarker();
        this.setState( { 'markers': this.props.markers } );
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
                onMarkerClick={this.handleMarkerClick.bind(this)}
                markers={this.props.markers}
            />
        );
    }
}

GoogleMaps.propTypes = {
    'markers': PropTypes.arrayOf( PropTypes.object )
};

export default GoogleMaps;
