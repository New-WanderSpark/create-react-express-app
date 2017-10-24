import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlacesSearchComponent from './components/placesSearch/PlacesSearchContainer';
import ViewPlaceDialog from './components/ViewPlaceDialog';

class App extends Component {
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
        console.log( 'pin place', place.title );
    }

    render () {
        return (
            <MuiThemeProvider>
                <div>
                    <PlacesSearchComponent handleViewPlaceDetails={place => this.showPlaceDialog( place )} />
                    <ViewPlaceDialog
                        open={this.state.placeDialogOpen}
                        place={this.state.selectedPlace}
                        handlePin={place => this.pinPlace( place )}
                        handleClose={() => this.closePlaceDialog()}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
