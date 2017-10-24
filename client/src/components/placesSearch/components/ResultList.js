import React from 'react';

// component for rendering a place
import ResultItemContainer from '../containers/ResultItemContainer';

export default function ResultList ( props ) {
    const { handleViewPlaceDetails, places } = props;
    return (
        <ul style={{ 'textAlign': 'left' }}>
            {
                places ? places.map( place => {
                    return <ResultItemContainer
                        key={place.placeId}
                        place={place}
                        handleViewPlaceDetails={handleViewPlaceDetails}
                    />;
                } ) : ''
            }
        </ul>
    );
};
