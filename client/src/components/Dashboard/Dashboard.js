import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import tripsAPI from '../../lib/tripsAPI';

// COMPONENTS
import './Dashboard.css';
import Banner from '../Banner';
import Corkboard from '../Corkboard';
import Footer from '../Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlacesSearchContainer from '../PlacesSearch/PlacesSearchContainer';
import SearchMenu from '../SearchMenu';
import UserFAB from '../UserFAB';
import ViewPlaceDialog from '../ViewPlaceDialog';

class Dashboard extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            'placeDialogOpen': false,
            'pinnedPlaces': [],
            'selectedPlace': {},
            'tripId': '59f0080ef2f4740b1c555e30' // using test tripId
        };
    }

    // set the current place for the place details dialog and show the dialog
    showPlaceDialog ( place ) {
        console.log( place );
        this.setState( { 'selectedPlace': place, 'placeDialogOpen': true } );
    }

    // close the place details dialog
    closePlaceDialog () {
        this.setState( { 'placeDialogOpen': false } );
    }

    loadPinnedPlaces () {
        if ( this.state.tripId ) {}
        tripsAPI.getTripData( this.state.tripId );
    }

    // pins place to the place collection
    pinPlace ( place ) {
        // TODO add procedure to add the place to the collection of places pinned to the main trip area
        // and send request to save the trip in the data base
        // send api request to add trip
        // tripsAPI.addPlace( place.placeId )
        //     .then( result => {
        //         if ( result ) {
        //             return tripsAPI.getTripData( )
        //         } else {
        //             console.log( 'a problem occured saving place to trip' );
        //         }
        //     } )
        //     // TODO notify user of problem if error occurs
        //     .catch( console.log );
        // // console log the result
        this.setState( { 'pinnedPlaces': this.state.pinnedPlaces.concat( place ) } );
        this.closePlaceDialog();
    }
    render () {
        // const myCorkboard = () => <Corkboard places={this.state.pinnedPlaces} />;
        return (
            <div className='workdesk'>
                <SearchMenu>
                    <PlacesSearchContainer
                        handleViewPlaceDetails={place => this.showPlaceDialog( place )}
                        handlePinPlace={place => this.pinPlace( place )}
                    />
                </SearchMenu>
                <UserFAB />
                <Banner />
                <Switch>
                    <Route path='/dashboard' render={() => <Corkboard places={this.state.pinnedPlaces} />} />
                    <Route path='/settings' component={Banner} />
                </Switch>
                <Footer />
                <MuiThemeProvider>
                    <ViewPlaceDialog
                        open={this.state.placeDialogOpen}
                        place={this.state.selectedPlace}
                        handlePin={place => this.pinPlace( place )}
                        handleClose={() => this.closePlaceDialog()}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Dashboard;
