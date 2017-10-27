import axios from 'axios';

// Sends request to trips API and update the array of place ids
function updatePlaces ( tripId, placeIds ) {
    return axios.put( `/api/trips/${tripId}`, { placeIds } )
        .then( result => {
            if ( result.statusText === 'OK' ) {
                return result.data.placeIds;
            }
            // TODO add error handling
            console.log( result.statusText );
            return null;
        } )
        .catch( error => {
            console.log( error );
            return null;
        } );
}

// Accepts a userId and returns the data for the trip belonging
// to the user.
function getTripData ( userId ) {
    // send a request to the api
    return axios.post( `/api/trips`, { 'ownerId': userId } )
        // return the trip data object if request is good or return null if request is bad
        .then( result => {
            if ( result.statusText === 'OK' ) {
                return result.data;
            }
            // TODO add error handling
            console.log( result.statusText );
            return null;
        } )
        .catch( error => {
            console.log( error );
            return null;
        } );
}

export default { getTripData, updatePlaces };
