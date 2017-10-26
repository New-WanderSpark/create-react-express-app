import React from 'react';
import { Card, CardTitle } from 'react-materialize';

// place holder image until google places photos api is integrated with app
import Shibuya from './shibuya.png';

const PlacePinCard = ( { place } ) => {
    const details = (
        <ul>
            <li>Stars: {place.stars}</li>
            <li>Address: {place.address}</li>
            <li>Phone: {place.phoneNumber}</li>
        </ul>
    );
    return (
        <Card header={<CardTitle reveal image={Shibuya} waves='light'/>}
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
export default PlacePinCard;
