import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlacesSearchComponent from './components/placesSearch/PlacesSearchContainer';

class App extends Component {
    render () {
        return (
            <MuiThemeProvider>
                <PlacesSearchComponent />
            </MuiThemeProvider>
        );
    }
}

export default App;
