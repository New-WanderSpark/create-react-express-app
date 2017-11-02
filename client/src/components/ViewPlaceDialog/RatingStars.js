import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-materialize';

const RatingStars = ( {stars} ) => {
    // return no rating if rating is NaN
    if ( isNaN( parseFloat( stars ) ) ) return <span>{stars}</span>;

    const starFull = 'star';
    const starHalf = 'star_half';

    // get an array of stars from the rating rounding off to intervals of .5
    const rating = ( Math.round( parseFloat( stars * 2 ) ) / 2 ).toFixed( 1 );
    const starsArr = Array( Math.floor( rating ) ).fill( starFull );
    if ( rating > starsArr.length ) starsArr.push( starHalf );

    return (
        <span>
            {starsArr.map( ( iconName, index ) => (
                <Icon className='yellow-text text-darken-1' key={`star-${index}`}>{iconName}</Icon>
            ) )}
        </span>
    );
};

RatingStars.propTypes = {
    'stars': PropTypes.oneOfType( [PropTypes.string, PropTypes.number] )
};

export default RatingStars;
