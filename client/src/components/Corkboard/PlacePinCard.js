import React from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import PropTypes from 'prop-types';
import RatingStars from '../RatingStars';
import Button from './RemovePinBtn';

// place holder image until google places photos api is integrated with app
import placeHolderImg from './shibuya.png';

const PlacePinCard = ( { place } ) => {
    const details = (
        <Row>
            <Col s={12} className='center-align'><RatingStars stars={place.stars} /></Col>
            <Col s={12} className='center-align'>Address: {place.address}</Col>
            <Col s={12} className='center-align'>Phone: {place.phoneNumber}</Col>
            <Col s={12} className='center-align'><Button>Unpin</Button></Col>
        </Row>
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
