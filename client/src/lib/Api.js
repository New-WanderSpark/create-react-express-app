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
            throw new Error( 'No registration data passed.' );
        }

        return axiosInstance.post( '/register', registrationData );
    },
    login ( loginObj ) {
        if ( !loginObj || !loginObj.userName || !loginObj.password ) {
            throw new Error( 'Login information is incomplete.' );
        }

        return axiosInstance.post( '/login', loginObj );
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

        return axiosInstance.post( `/api/trips`, { 'ownerId': userId } );
    },

    /**
     * Places calls
     */
    getDetails ( placeid ) {
        if ( !placeid ) {
            return Promise.reject( new Error( 'placeid is a required field.' ) );
        }

        return axios.post( '/places/details', { placeid } );
    },
    textSearch ( queryString ) {
        if ( !queryString || queryString.length < 3 ) {
            return Promise.reject( new Error( 'placeid is a required field.' ) );
        }

        return axios.get( `/places/search/${queryString}` );
    }
};
