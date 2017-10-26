import React from 'react';
import './Corkboard.css';
import GoogleMaps from "../Maps";
import PlacePinCard from './PlacePinCard';

const Corkboard = ( props ) => {
    let placeCards;
    if ( props.places ) {
        placeCards = props.places.map(place => (
            <div className="col s12 m4" key={place.placeId}>
                <PlacePinCard place={place} />
            </div>
        ));
    }
    return (
        <div className="background-image">
            <div className="container">
                <div className="row">
                    {placeCards}
                    <div className="col s12 m12">
                        <GoogleMaps />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Corkboard;
