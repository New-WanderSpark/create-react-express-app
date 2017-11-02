import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Button from './Button';

// This component is a presentatial component rendering one result from the places search.
class ResultItem extends React.Component {
    render () {
        const { place } = this.props;
        return (
            <li>
                <p>Title: {place.title}</p>
                <p>Stars: {place.stars}</p>
                <p>Category: {place.categories[0]}</p>
                <p>PlaceId: {place.placeId}</p>
                <img src={place.getImgUrl()} />
                <Button handleClick={this.props.handleViewClick}>View</Button>
                <Button handleClick={this.props.handlePinClick}>Pin</Button>
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
