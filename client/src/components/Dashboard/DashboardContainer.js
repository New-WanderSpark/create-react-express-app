import React, { Component } from 'react';
import Dashboard from './Dashboard';
import PlacesSearchContainer from '../PlacesSearch/PlacesSearchContainer.js';

class DashboardContainer extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            'placeDialogOpen': false,
            'selectedPlace': {}
        };
    }

    // set the current place for the place details dialog and show the dialog
    showPlaceDialog ( place ) {
        this.setState( { 'selectedPlace': place, 'placeDialogOpen': true } )
    }

    // close the place details dialog
    closePlaceDialog () {
        this.setState( { 'placeDialogOpen': false } );
    }

    // pins place to the place collection
    pinPlace ( place ) {
        // TODO add procedure to add the place to the collection of places pinned to the main trip area
        // and send request to save the trip in the data base
        window.alert( `Add place to trip:\ntitle: ${place.title}\nplaceId: ${place.placeId}` );
        this.closePlaceDialog();
    }
    render () {
        return <Dashboard placeSearch='' />;
    }
}

export default DashboardContainer;
