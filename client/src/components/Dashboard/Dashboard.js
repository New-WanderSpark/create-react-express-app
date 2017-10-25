import React, { Component } from 'react';
import './Dashboard.css';
import SearchMenu from '../SearchMenu';
import UserFAB from '../UserFAB';
import Banner from '../Banner';
import Corkboard from '../Corkboard';
import Footer from '../Footer';
import PlacesSearchContainer from '../PlacesSearch/PlacesSearchContainer';
// import ViewPlaceDialog from '../ViewPlaceDialog';

class Dashboard extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            'placeDialogOpen': false,
            'selectedPlace': {}
        };
    }

    // set the current place for the place details dialog and show the dialog
    showPlaceDialog ( place ) {
        this.setState( { 'selectedPlace': place, 'placeDialogOpen': true } );
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
        return (
            <div>
                <SearchMenu>
                    <PlacesSearchContainer
                        handleViewPlaceDetails={place => this.showPlaceDialog( place )}
                        handlePinPlace={place => this.pinPlace( place )}
                    />
                </SearchMenu>
                <UserFAB />
                <Banner />
                <Corkboard />
                <Footer />
                {/* <ViewPlaceDialog
                    open={this.state.placeDialogOpen}
                    place={this.state.selectedPlace}
                    handlePin={place => this.pinPlace( place )}
                    handleClose={() => this.closePlaceDialog()}
                /> */}
            </div>
        );
    }
}

export default Dashboard;
