import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PlaceData from '../../lib/PlaceData';
import { Api } from '../../lib/Api';

// COMPONENTS
import './Dashboard.css';
import Banner from '../Banner';
import Corkboard from '../Corkboard';
import Footer from '../Footer';
import GoogleMaps from '../Maps';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlacesSearchContainer from '../PlacesSearch/PlacesSearchContainer';
import SearchMenu from '../SearchMenu';
import Settings from '../Settings';
import UserFAB from '../UserFAB';
import ViewPlaceDialog from '../ViewPlaceDialog';

class Dashboard extends Component {
    constructor () {
        super();
        const userId = JSON.parse( window.localStorage.getItem( 'user' ) ).userId;
        this.state = {
            'mapMarkers': [],
            'placeDialogOpen': false,
            'pinnedPlaces': [], // array of PlaceData instances
            'selectedPlace': {},
            'tripId': ''
        };

        // get the trip for that user and update the tripId and pinnedPlaces
        Api.getTripData( userId )
            .then( result => {
                if ( result ) {
                    this.setState( { 'tripId': result.data._id } );
                    return this.loadPlaceData( result.data.placeIds );
                } else {
                    return console.log( `unable to access trip data for userId "${userId}"` );
                }
            } )
            .then( this.updateMarkers.bind( this ) )
            .catch( error => console.log( `error occured loading trip data for userId "${userId}"`, error ) );
    }

    // Accepts an array of placeids and requests details for each place and updates the state accordingly.
    loadPlaceData ( placeIdArr ) {
        if ( !placeIdArr ) return void 0;
        return Promise
            // use .all to preserve the order of the data despite async
            .all( placeIdArr.map( id => Api.getDetails( id ) ) )

            // create a new PlaceData object for each response from google
            .then( resultArr => {
                this.setState( { 'pinnedPlaces': resultArr.map( result => new PlaceData( result.data ) ) } );
            } )

            // TODO error handling
            .catch( error => console.log( `A problem occured loading place details. Place ids: ${placeIdArr}`, error ) );
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
        Api.getDetails( place.placeId )
            .then( result => {
                if ( result.data ) {
                    place.setDetails( result.data );
                    const placeIdArr = this.state.pinnedPlaces.map( el => el.placeId ).concat( place.placeId );
                    Api.updatePlaces( this.state.tripId, placeIdArr )
                        .then( result => {
                            if ( result ) {
                                this.setState( { 'pinnedPlaces': this.state.pinnedPlaces.concat( place ) } );
                            }
                        } )
                        .then( this.updateMarkers.bind( this ) )
                        .catch( error => console.log( 'error occured updating the trip', error ) );
                }
            } )
            .catch( err => console.log( 'failed to load place details', err ) );
        this.closePlaceDialog();
    }

    // Updates the mapMarkers displayed on the map
    updateMarkers () {
        const markers = this.state.pinnedPlaces
            .filter( placeData => Boolean( placeData.geometry ) )
            .map( placeData => placeData.geometry.location );
        this.setState( { 'mapMarkers': markers } );
    }

    render () {
        // set the center of the google map view to the last pin in the array of pinned places
        // of the places with a valid geometry object
        const markers = this.state.mapMarkers;
        let mapCenter = null;
        if ( markers.length ) {
            mapCenter = markers[markers.length - 1];
        }

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
                    <Route path='/dashboard' render={() => (
                        <Corkboard
                            places={this.state.pinnedPlaces}
                            map={<GoogleMaps markers={markers} center={mapCenter} />}
                        />
                    )} />
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
