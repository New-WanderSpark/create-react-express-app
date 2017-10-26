import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import placesAPI from '../../lib/placesAPI';
import tripsAPI from '../../lib/tripsAPI';

// COMPONENTS
import './Dashboard.css';
import Banner from '../Banner';
import Corkboard from '../Corkboard';
import Footer from '../Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlacesSearchContainer from '../PlacesSearch/PlacesSearchContainer';
import SearchMenu from '../SearchMenu';
import Settings from '../Settings';
import UserFAB from '../UserFAB';
import ViewPlaceDialog from '../ViewPlaceDialog';
// import PlaceData from '../../lib/PlaceData';

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

    // gets place data for all placesIds in the array of pinned places in the trip data.
    loadPinnedPlaces () {
        if ( this.state.tripId ) {}
        tripsAPI.getTripData( this.state.tripId );
    }

    // adds additional details to an instance of PlaceData if not already loaded
    loadPlaceDetails ( place ) {
        return placesAPI.getDetails( place.placeId )
            .then( result => {
                if ( result ) {
                    place.setDetails( result );
                    console.log( place );
                    console.log( this.state.pinnedPlaces );
                } else {
                    console.log( 'unable to load place details' );
                }
            } )
            .catch( error => console.log( 'error occured loading details', error ) );
    }

    // pins place to the place collection
    pinPlace ( place ) {
        // TODO add procedure to add the place to the collection of places pinned to the main trip area
        placesAPI.getDetails( place.placeId )
            .then( result => {
                if ( result ) {
                    place.setDetails( result );
                    const placeIdArr = this.state.pinnedPlaces.map( el => el.placeId ).concat( place.placeId );
                    tripsAPI.updatePlaces( this.state.tripId, placeIdArr );
                    this.setState( { 'pinnedPlaces': this.state.pinnedPlaces.concat( place ) } );
                }
            } )
            .catch( err => console.log( 'failed to load place details', err ) );
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
                    {/* <Route path='/settings' component={Banner} /> */}
                    {/* <Route path='/dashboard' component={Corkboard}/> */}
                    <Route path='/settings' component={Settings}/>
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
