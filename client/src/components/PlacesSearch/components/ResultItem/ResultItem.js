// This component is a presentatial component rendering one result from the places search.

import React from 'react';

// COMPONENTS
import Button from './Button';

export default function ResultItem ( props ) {
    const { place } = props;
    const photoRef = place.photos[0] ? place.photos[0].photo_reference : 'unavailable';
    console.log(place);
    return (
        <li>
            <p>Title: {place.title}</p>
            <p>Stars: {place.stars}</p>
            <p>Category: {place.categories[0]}</p>
            <p>PhotoRef: <br />{photoRef}</p>
            <p>PlaceId: {place.placeId}</p>
            <Button handleClick={props.handleViewClick}>View</Button>
            <Button handleClick={props.handlePinClick}>Pin</Button>
        </li>
    );
}
