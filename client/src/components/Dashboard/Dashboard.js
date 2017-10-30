/* TO DO:
*
*   - Add a map property to Corkboard which gets rendered in place of the GoogleMaps component
*   - Dashboard should pass a google map component as the map prop on Corkboard
*   - GoogleMap component should accept a markers prop which is an array of lat long objects representing markers to render
*   - Add a mapMarkers property to the state of Dashboard. This should be the array of markers passed to the GoogleMap component.
*   - The pin place method should add a marker to state.mapMarkers array
 */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import placesAPI from '../../lib/placesAPI';
import PlaceData from '../../lib/PlaceData';
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

class Dashboard extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            'placeDialogOpen': false,
            'pinnedPlaces': [], // array of PlaceData instances
            'selectedPlace': {},
            'tripId': ''
        };
        // get the trip for that user and update the tripId and pinnedPlaces
        tripsAPI.getTripData( props.userId )
            .then( result => {
                if ( result ) {
                    this.setState( { 'tripId': result._id } );
                    this.loadPlaceData( result.placeIds );
                } else {
                    console.log( `unable to access trip data for userId ${props.userId}` );
                }
            } )
            .catch( error => console.log( `error occured loading trip data for userId ${props.userId}`, error ) );
    }

    // Accepts an array of placeids and requests detailss for each place and updates the state accordingly.
    loadPlaceData ( placeIdArr ) {
        Promise
            // use .all to preserve the order of the data despite async
            .all( placeIdArr.map( id => placesAPI.getDetails( id ) ) )

            // create a new PlaceData object for each response from google
            .then( resultArr => {
                this.setState( { 'pinnedPlaces': resultArr.map( detailsObj => new PlaceData( detailsObj ) ) } );
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

    // adds additional details to an instance of PlaceData if not already loaded
    loadPlaceDetails ( place ) {
        return placesAPI.getDetails( place.placeId )
            .then( result => {
                if ( result ) {
                    place.setDetails( result );
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
                    tripsAPI.updatePlaces( this.state.tripId, placeIdArr )
                        .then( result => {
                            if ( result ) {
                                this.setState( { 'pinnedPlaces': this.state.pinnedPlaces.concat( place ) } );
                            }
                        } )
                        .catch( error => console.log( 'error occured updating the trip', error ) );
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
