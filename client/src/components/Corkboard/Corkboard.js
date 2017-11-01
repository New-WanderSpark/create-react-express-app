import PlaceData from '../../lib/PlaceData';
import PropTypes from 'prop-types';
import React from 'react';

// Import Components
import './Corkboard.css';
import PlacePinCard from './PlacePinCard';

const Corkboard = ( props ) => {
    let placeCards = [];
    if ( props.places ) {
        placeCards = props.places.map( place => (
            <div className="col s12 m4" key={place.placeId}>
                <PlacePinCard place={place} />
            </div>
        ) );
    }
    return (
        <div className="background-image">
            <div className="container">
                <div className="row">
                    {placeCards}
                    <div className="col s12 m12">
                        {props.map}
                    </div>
                </div>
            </div>
        </div>
    );
};

Corkboard.propTypes = {
    'places': PropTypes.arrayOf( PropTypes.instanceOf( PlaceData ) ),
    'map': PropTypes.element
};

export default Corkboard;
