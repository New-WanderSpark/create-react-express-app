import axios from 'axios';

// Sends request to trips API to add a place to a trip
function addPlace ( tripId, placeId ) {
    // TODO write code to send a request to the trips api to update a trip with
    // a new place and pass true on success else pass false

    // temporarily sends a promise with mock data
    return new Promise( ( resolve, reject ) => {
        return resolve( true );
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

export default { addPlace, getTripData };
