import React, { Component } from 'react';

// component for rendering a place
import ResultItem from '../components/ResultItem/ResultItem';

class ResultItemContainer extends Component {
    handlePinClick ( event, place ) {
        event.preventDefault();
        this.props.handlePinPlace( place );
    }
    handleViewClick ( event, place ) {
        event.preventDefault();
        this.props.handleViewPlaceDetails( place );
    }
    render () {
        const { place } = this.props;
        return (
            <ResultItem
                title={place.title}
                address={place.address}
                handleViewClick={event => this.handleViewClick( event, place )}
                handlePinClick={event => this.handlePinClick( event, place )}
            />
        );
    }
}
export default ResultItemContainer;
