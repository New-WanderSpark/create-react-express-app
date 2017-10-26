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
function getTripData ( tripId ) {
    // TODO write code to send a request to the api and return trip data

    // sending mock data for testing. this code should eventually
    // return a promise produced by calling axios()
    return new Promise( ( resolve, reject ) => {
        return resolve(
            {
                '_id': '59f12ea07426635434dfd0da',
                'tripName': 'Turkey Classical History Tour',
                'ownerId': 'JohnD',
                '__v': 0,
                'lastUpdated': '2017-10-26T00:38:56.355Z',
                'createdAt': '2017-10-26T00:38:56.355Z',
                'placeIds': [
                    'ChIJO6ypIwBu5kcRKlGBjcGwc6Q'
                ]
            }
        );
    } );
}

export default { getTripData, updatePlaces };
