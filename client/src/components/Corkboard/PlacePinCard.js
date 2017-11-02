import React from 'react';
import { Card, CardTitle } from 'react-materialize';
import PropTypes from 'prop-types';

// place holder image until google places photos api is integrated with app
import placeHolderImg from './shibuya.png';

const PlacePinCard = ( { place } ) => {
    const details = (
        <ul>
            <li>Stars: {place.stars}</li>
            <li>Address: {place.address}</li>
            <li>Phone: {place.phoneNumber}</li>
        </ul>
    );
    const imgSrc = place.getImgUrl( '400', 1 ) || placeHolderImg;

    return (
        <Card header={<CardTitle reveal image={imgSrc} waves='light'/>}
            title={place.title}
            reveal={details}>
            <div>
                {place.url === 'unavailable'
                    ? <p>unavailable</p>
                    : <a href={place.url} target='_'>{place.url}</a>
                }
            </div>
        </Card>
    );
};

PlacePinCard.propTypes = {
    'place': PropTypes.object
};

export default PlacePinCard;
