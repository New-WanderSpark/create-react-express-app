import React from 'react';
import PropTypes from 'prop-types';
import RatingStars from '../../../RatingStars';
import { Row, Col } from 'react-materialize';
import './ResultItem.css';

// COMPONENTS
import Button from './Button';

// This component is a presentatial component rendering one result from the places search.
class ResultItem extends React.Component {
    render () {
        const { place } = this.props;
        return (
            <li>
                <Row>
                    <Col s={12} className='center-align' id='resultTitle'><p>{place.title}</p></Col>
                    <Col s={12} className='center-align'><RatingStars stars={place.stars} /></Col>
                    <Col s={12} className='center-align'><img src={place.getImgUrl()}/></Col>
                    <Col s={12} className='center-align'>
                        <Button handleClick={this.props.handleViewClick}>View</Button>
                        <Button handleClick={this.props.handlePinClick}>Pin</Button>
                    </Col>
                </Row>
            </li>
        );
    }
}

ResultItem.propTypes = {
    'handlePinClick': PropTypes.func,
    'handleViewClick': PropTypes.func,
    'place': PropTypes.object
};

export default ResultItem;
