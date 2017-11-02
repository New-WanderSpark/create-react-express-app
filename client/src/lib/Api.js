import axios from 'axios';

let baseUrl = 'http://localhost:3001';

if ( process.env.NODE_ENV === 'production' ) {
    baseUrl = 'https://wander-spark.herokuapp.com/';
}

/**
 * Init the axios config objext.
 */
const axiosConfig = {
    'baseURL': baseUrl,
    'responseType': 'json',
    'headers': {}
};

/**
 * Check for JWT
 */
const jwt = localStorage.getItem( 'jwt' ) || null;
if ( jwt ) {
    axiosConfig.headers.Authorization = `jwt ${jwt}`;
}

/**
 * Create the axios instance with the config object.
 */
const axiosInstance = axios.create( axiosConfig );

/**
 * Export main Api
 */
export const Api = {
    /**
     * Auth calls
     */
    register ( registrationData ) {
        if ( !registrationData ) {
            return Promise.reject( new Error( 'No registration data passed.' ) );
        }

        return axiosInstance.post( '/register', registrationData );
    },
    login ( loginObj ) {
        if ( !loginObj || !loginObj.userName || !loginObj.password ) {
            return Promise.reject( new Error( 'Login information is incomplete.' ) );
        }

        return axiosInstance.post( '/login', loginObj );
    },
    updateUser ( userObj ) {
        if ( !userObj ) {
            return Promise.reject( new Error( 'User object contains no data.' ) );
        }

        return axiosInstance.put( '/api/user', userObj );
    },

    /**
     * Trips calls
     */
    updatePlaces ( tripId, placeIds ) {
        if ( !tripId || !placeIds ) {
            return Promise.reject( new Error( 'tripId and placesId are required fields.' ) );
        }

        return axiosInstance.put( `/api/trips/${tripId}`, { placeIds } );
    },
    getTripData ( userId ) {
        if ( !userId ) {
            return Promise.reject( new Error( 'userId is a required field.' ) );
        }

        return axiosInstance.post( '/api/trips', { 'ownerId': userId } );
    },

    /**
     * Only alling update to name for now.
     * 
     * @param {string} tripName 
     */
    updateTripName ( tripName ) {
        if ( !tripName ) {
            return Promise.reject( new Error( 'tripName is a required field.' ) );
        }

        return axiosInstance.put( '/api/trips', tripName );
    },

    /**
     * Places calls
     */
    getDetails ( placeid ) {
        if ( !placeid ) {
            return Promise.reject( new Error( 'placeid is a required field.' ) );
        }

        return axiosInstance.post( '/api/places/details', { placeid } );
    },
    textSearch ( queryString ) {
        if ( !queryString || queryString.length < 3 ) {
            return Promise.reject( new Error( 'placeid is a required field.' ) );
        }

        return axiosInstance.get( `/api/places/search/${queryString}` );
    }
};
